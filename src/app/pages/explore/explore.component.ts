import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TravelDataService } from '../../services/travel-data.service';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import gsap from 'gsap';

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  imports: [CommonModule, NgClass, FormsModule]
})
export class ExploreComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  @ViewChild('map') mapContainer!: ElementRef;

  destinationId: string | null = null;
  selectedDestination: any = null;
  hotelPhotoLabels: string[] = [];
  activeSlide = 0;
  selectedLocations: any[] = [];
  totalDays: number = 0;
  expandedDay: number | null = null;
  selectedLocationId: string | null = null;
  heroLocations: any[] = [];
  trendyLocations: any[] = [];
  isNavSticky = false;
  mappingDetails: any = {};
  activeDay: number | null = null;
  activeMarkerId: string | null = null;
  currentIndex: number = 0;
  filteredPlaces: any[] = [];
  containerHeight = '100%';
  dayRanges: { start: number, end: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private travelData: TravelDataService,
    public authService: AuthService,
    public cookieService: CookieService,
  ) {
    this.heroLocations = this.travelData.getHeroLocations();
    this.trendyLocations = this.travelData.getTrendyLocations();
    // console.log('Service Section:', this.selectedDestination?.serviceSection?.services);
  }

  ngAfterViewInit(): void {
    gsap.to(this.container.nativeElement, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.out'
    });
  }

  ngOnInit() {
    const storedLocation = this.cookieService.get('selectedLocation');
     this.setHeightBasedOnScreen(window.innerWidth);
    if (storedLocation) {
      this.selectedLocationId = storedLocation;
    }
    this.destinationId = this.route.snapshot.paramMap.get('destinationId');
    if (this.destinationId) {
      this.selectedDestination = this.travelData.getLocationById(this.destinationId);
      this.totalDays = this.selectedDestination.itinerary ? this.selectedDestination.itinerary.length : 0;
      this.hotelPhotoLabels = this.travelData.getHotelPhotoLabels(this.destinationId, 1);
      this.mappingDetails = this.selectedDestination.mappingDetails;
      if (this.selectedDestination?.topImages?.length > 0) {
        setInterval(() => {
          this.activeSlide = (this.activeSlide + 1) % this.selectedDestination!.topImages.length;
        }, 4000);
      }
      if (this.mappingDetails.length > 0) {
        this.currentIndex = 0;
        this.activeMarkerId = this.mappingDetails[this.currentIndex].id;
      }
    }
    console.log('Service Section:', this.selectedDestination?.serviceSection?.services);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setHeightBasedOnScreen(event.target.innerWidth);
  }

  private setHeightBasedOnScreen(width: number) {
    this.containerHeight = width <= 768 ? '300px' : width <= 1024 ? '500px' : '100%';
  }

  setSelectedDestination(destination: any, index: number): void {
    this.selectedDestination = destination;
    this.currentIndex = index;
    this.activeMarkerId = destination.id;
  }

  // Update nextDestination to set activeMarkerId
  nextDestination(): void {
    if (this.mappingDetails.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.mappingDetails.length;
    this.activeMarkerId = this.mappingDetails[this.currentIndex].id;
  }

  // Update prevDestination to set activeMarkerId
  prevDestination(): void {
    if (this.mappingDetails.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.mappingDetails.length) % this.mappingDetails.length;
    this.activeMarkerId = this.mappingDetails[this.currentIndex].id;
  }
  scrollToDay(dayNumber: number) {
    const container = document.querySelector('.scrollable-days-container');
    const dayElement = document.getElementById(`day-${dayNumber}`);

    if (container && dayElement) {
      // Scroll the specific day into view within the container
      dayElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });

    }
  }

  getHotelPhotoLabel(day: any, index: number): string {
    const labels = ['Suite', 'Pool', 'Lobby', 'Restaurant', 'Spa', 'Garden'];
    return labels[index] || `View ${index + 1}`;
  }
}
