import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TravelDataService } from '../../services/travel-data.service';
import { HomeDataService } from '../../services/home-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  slides: any[] = [];
  travelPackages: any[] = [];
  activeSlide = 0;
  clonedPackages: any[] = [];
  activeIndex = 0;
  translateX = -100;
  tilesPerSlide = window.innerWidth > 768 ? 4 : 1;
  isTransitioning = false;
  shouldAnimate = true;
  intervalheroId: any;
  featuredDestinations: any[] = [];
  testimonials: { id: number; name: string; location: string; rating: number; text: string; image: string; tripDestination: string; }[] = [];
  featuredPackages: any[] = [];
  @ViewChildren('travelGrid') travelGrids!: QueryList<ElementRef>;
  private travelGridScrolled = false;

  constructor(private travelDataService: TravelDataService, private homeDataService: HomeDataService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.slides = this.travelDataService.getHeroLocations();
    this.fetchTestimonials();
    this.fetchFeaturedDestinations();
    this.fetchFeaturedPackages(); // Fetch featured packages on initialization
    this.intervalheroId = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 4000);
  }

  ngAfterViewInit() {
    this.travelGrids.forEach(gridRef => {
      const grid = gridRef.nativeElement;
      grid.addEventListener('scroll', this.handleTravelGridScroll.bind(this));
    });
  }

  fetchTestimonials() {
    const homePageData = this.homeDataService.getHomePageData();
    this.testimonials = homePageData.testimony;
    this.cdr.detectChanges();
  }

  fetchFeaturedDestinations() {
    const destinations = this.travelDataService.getAllLocations();
    const targetIds = ['Vietnam', 'France', 'maldives', 'Andaman', 'SriLanka'];
    this.featuredDestinations = destinations.filter(destination =>
      targetIds.includes(destination.id)
    );
    console.log('Filtered destinations:', this.featuredDestinations);
  }

  fetchFeaturedPackages() {
    const packages = this.travelDataService.getAllLocations();
    const targetIds = ['Vietnam', 'France', 'maldives', 'Andaman', 'SriLanka'];
    this.featuredPackages = packages.filter(packageItem =>
      targetIds.includes(packageItem.id)
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalheroId);
    // Remove scroll event listeners from all travel grids
    this.travelGrids.forEach(gridRef => {
      const grid = gridRef.nativeElement;
      grid.removeEventListener('scroll', this.handleTravelGridScroll.bind(this));
    });
  }

  private handleTravelGridScroll(event: Event): void {
    const grid = event.target as HTMLElement;
    if (grid.scrollLeft > 0 && !this.travelGridScrolled) {
      grid.classList.add('scrolled');
      this.travelGridScrolled = true;
    } else if (grid.scrollLeft === 0 && this.travelGridScrolled) {
      grid.classList.remove('scrolled');
      this.travelGridScrolled = false;
    }
  }
}
