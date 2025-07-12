import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet,Router,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterVisibilityService } from './services/footer-visibility.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { TravelDataService } from './services/travel-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, CommonModule],
})
export class AppComponent implements OnInit {
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true }) popupContainer!: ViewContainerRef;
  private isPopupOpen = false;
  title = 'expllingo-frontend';
  footerVisible$!: Observable<boolean>;

  constructor(
    private footerVisibilityService: FooterVisibilityService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private travelDataService: TravelDataService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.footerVisible$ = this.footerVisibilityService.footerVisible$;
    // If you have any logic that updates footerVisible$, ensure to call this.cdr.detectChanges() afterward.
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo( 0,0 );
      });
  }

  destinations: any[] = [];

  togglePopup(destinationId: string): void {
    try {
      if (this.isPopupOpen) {
        this.closePopup();
      } else {
        this.destinations = this.travelDataService.getAllLocations();
        if (!this.destinations?.length) {
          console.error('No destinations found');
          return;
        }
        this.popupContainer.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DestinationsComponent);
        const componentRef = this.popupContainer.createComponent(componentFactory);
        componentRef.instance.destinations = this.destinations;
        this.isPopupOpen = true;
        this.cdr.detectChanges(); // Manually trigger change detection
      }
    } catch (error) {
      console.error('Error showing destinations:', error);
    }
  }

  closePopup(): void {
    this.popupContainer.clear();
    this.isPopupOpen = false;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  
}
