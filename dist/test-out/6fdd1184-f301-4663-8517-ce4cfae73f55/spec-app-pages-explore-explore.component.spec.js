import {
  gsapWithCSS,
  init_gsap
} from "./chunk-NRTI6FCM.js";
import {
  TravelDataService,
  init_travel_data_service
} from "./chunk-5SDFLPWZ.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2V6KEZW6.js";
import {
  AuthService,
  CookieService,
  init_auth_service,
  init_ngx_cookie_service
} from "./chunk-27UD5MJR.js";
import {
  ActivatedRoute,
  init_router
} from "./chunk-YGAVFKBD.js";
import {
  CommonModule,
  NgClass,
  init_common
} from "./chunk-OFHRICUK.js";
import "./chunk-FI3XTIHJ.js";
import "./chunk-ZCYQ42IE.js";
import {
  Component,
  TestBed,
  ViewChild,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/pages/explore/explore.component.html
var explore_component_default;
var init_explore_component = __esm({
  "angular:jit:template:src/app/pages/explore/explore.component.html"() {
    explore_component_default = `<div *ngIf="selectedDestination" #container class="explore-page">
  <div class="hero-section1">
    <div class="hero-slideshow">
      <div class="hero-slide" *ngFor="let slide of selectedDestination.topImages; let i = index"
        [ngClass]="{ 'active': i === activeSlide }" [style.backgroundImage]="'url(' + slide + ')'">
      </div>
    </div>
    <div class="hero-overlay1">
      <h1 class="city-name">{{ selectedDestination?.id }}</h1>
      <div class="location-facts">
      </div>
    </div>
  </div>


  <!-- Intro Section -->
  <section class="intro-section">
    <div class="container">
      <!-- Main Content -->
      <div class="main-content">
        <h2 class="title">{{ selectedDestination.introSection.title }}</h2>
        <p class="subtitle">{{ selectedDestination.introSection.subtitle }}</p>
        <div class="max-w-4xl mx-auto">
          <p class="description">{{ selectedDestination.introSection.description }}</p>
        </div>
      </div>
      <!-- Highlights Grid -->
      <div class="highlights-grid">
        <div *ngFor="let highlight of selectedDestination.introSection.highlights" class="highlight-card">
          <div class="highlight-icon">{{ highlight?.icon }}</div>
          <div class="highlight-value">{{ highlight?.value }}</div>
          <div class="highlight-title">{{ highlight?.title }}</div>
        </div>
      </div>
      <!-- Quick Facts -->
      <div class="quick-facts">
        <h3 class="quick-facts-title">Quick Facts</h3>
        <div class="facts-grid">
          <div *ngFor="let fact of selectedDestination.introSection.quickFacts" class="fact-item">
            <div class="fact-icon">
              <span *ngIf="fact.label.includes('Time')">\u{1F4C5}</span>
              <span *ngIf="fact.label.includes('Language')">\u{1F310}</span>
              <span *ngIf="fact.label.includes('Currency')">\u{1F4B0}</span>
              <span *ngIf="fact.label.includes('Zone')">\u23F0</span>
              <span
                *ngIf="!fact.label.includes('Time') && !fact.label.includes('Language') && !fact.label.includes('Currency') && !fact.label.includes('Zone')">\u{1F4CD}</span>
            </div>
            <div>
              <div class="fact-label">{{ fact.label }}</div>
              <div class="fact-value">{{ fact.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Services Section -->
  <section id="flip-card-services" class="flip-card-services section-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-title">
            <h2>{{ selectedDestination.serviceSection?.title }}</h2>
            <p>{{ selectedDestination.serviceSection?.description }}</p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="flip-cards-container">
            <div *ngFor="let service of selectedDestination.serviceSection.services" class="flip-card-wrapper">
              <div class="flip-card">
                <div class="flip-card-front"
                  style="background-image: url('https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')">
                  <h4 class="flip-card-text-shadow">{{ service.title }}</h4>
                </div>
                <div class="flip-card-back">
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Mapping Section -->
  <div class="map-interface">
    <!-- Satellite Map -->
    <div class="satellite-map">
      <div class="map-background"></div>

      <!-- Location Markers - Non-interactive -->
      <div *ngFor="let destination of mappingDetails; let i = index" class="location-marker"
        [ngClass]="{ 'active': activeMarkerId === destination.id }" [style.top]="destination.coordinates.top"
        [style.left]="destination.coordinates.left">
        <div class="marker-dot"></div>
        <div class="marker-label">{{ destination.mapname }}</div>
      </div>
    </div>

    <!-- Destination Info Card -->
    <div class="destination-card">
      <div class="card-content">
        <h2>{{ mappingDetails[currentIndex]?.mapname }}</h2>
        <p class="category">{{ mappingDetails[currentIndex]?.category }}</p>
        <p class="description">{{ mappingDetails[currentIndex]?.mapdescription }}</p>

        <div class="destination-image">
          <img [src]="mappingDetails[currentIndex]?.image" [alt]="mappingDetails[currentIndex]?.mapname">
        </div>
      </div>
    </div>

    <!-- Navigation Controls - Interactive -->
    <div class="navigation-controls">
      <button class="nav-btn prev-btn" (click)="prevDestination()" [disabled]="currentIndex === 0">
        &#10094;
      </button>
      <button class="nav-btn next-btn" (click)="nextDestination()"
        [disabled]="currentIndex === mappingDetails.length - 1">
        &#10095;
      </button>
    </div>
  </div>


  <!-- Itinerary Section -->
  <div class=hero-overlay12>
    <div class="itinerary-container1">
      <header class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Itinerary for {{ selectedDestination?.name }}</h1>
          <!-- <p class="hero-subtitle">{{ totalDays }} Days of Paradise Adventure</p> -->
        </div>
        <div class="hero-overlay"></div>
      </header>

      <!-- Rest of your itinerary template -->
      <nav class="day-navigation">
        <div class="container">
          <div class="nav-wrapper">
            <div class="nav-days">
              <button *ngFor="let day of selectedDestination.itinerary; let i = index" class="day-btn"
                [class.active]="activeDay === day.day" (click)="scrollToDay(day.day)">
                <span class="day-number">{{ day.day }}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main class="itinerary-content">
        <div class="container">
          <div class="scrollable-days-container">
            <div *ngFor="let day of selectedDestination.itinerary; let i = index" class="day-section"
              [id]="'day-' + day.day">
              <div class="day-header">
                <div class="day-badge">Day {{ day.day }}</div>
                <h2 class="day-title">{{ day.title }}</h2>
              </div>

              <div class="day-content">
                <!-- Activities Card -->
                <div class="activity-card">
                  <h3 class="card-title">
                    <i class="icon">\u{1F5FA}\uFE0F</i>
                    Today's Journey
                  </h3>

                  <div class="activity-details">
                    <div class="detail-item" *ngIf="day.transfers">
                      <span class="detail-label">Transfers:</span>
                      <span class="detail-value">{{ day.transfers }}</span>
                    </div>

                    <div class="detail-item" *ngIf="day.locations && day.locations.length">
                      <span class="detail-label">Locations:</span>
                      <ul class="excursion-list">
                        <li *ngFor="let location of day.locations">
                          {{ location.name }}: {{ location.description }}
                        </li>
                      </ul>
                    </div>

                    <div class="highlights" *ngIf="day.highlights && day.highlights.length">
                      <h4 class="highlights-title">Highlights</h4>
                      <div class="highlight-tags">
                        <span *ngFor="let highlight of day.highlights" class="highlight-tag">
                          {{ highlight }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Places Photos -->
                <div class="photo-section" *ngIf="day.images && day.images.places && day.images.places.length">
                  <h3 class="photo-section-title">
                    <i class="icon">\u{1F4F8}</i>
                    Places to Visit
                  </h3>
                  <div class="photo-grid">
                    <div *ngFor="let image of day.images.places; let i = index" class="photo-card"
                      [style.animation-delay.ms]="i * 100">
                      <img [src]="image" [alt]="'Place ' + (i + 1) + ' for day ' + day.day" loading="lazy">
                      <div class="photo-overlay">
                        <span class="photo-number">{{ i + 1 }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Hotel Photos -->
                <div class="photo-section" *ngIf="day.images && day.images.hotel && day.images.hotel.length">
                  <h3 class="photo-section-title">
                    <i class="icon">\u{1F3E8}</i>
                    Your Accommodation
                  </h3>
                  <div class="hotel-info">
                    <h4 class="hotel-name">{{ day.accommodation }}</h4>
                    <div class="meal-plan">
                      <i class="icon">\u{1F37D}\uFE0F</i>
                      <span>{{ day.mealPlan }}</span>
                    </div>
                  </div>
                  <div class="photo-grid hotel-photos">
                    <div *ngFor="let image of day.images.hotel; let i = index" class="photo-card hotel-photo"
                      [style.animation-delay.ms]="i * 150">
                      <img [src]="image" [alt]="'Hotel view ' + (i + 1)" loading="lazy">
                      <div class="photo-overlay">
                        <span class="photo-label">{{ getHotelPhotoLabel(day, i) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>


  <!-- Welcome/About Section -->
  <section class="about-section mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 text-center heading-section mb-5">
          <h2 class="text-black mb-2">{{ selectedDestination.welcomeSection?.title }}</h2>
          <p>{{ selectedDestination.welcomeSection?.description }}</p>
        </div>
      </div>
      <div *ngFor="let item of selectedDestination.aboutItems; let i = index" class="row img-wrap mb-5 mb-lg-0">
        <div class="col-12">
          <div class="row">
            <!-- Alternate the order of columns based on the index -->
            <div class="mb-4 margin-lg-0 col-lg-6" [ngClass]="{'order-lg-2': i % 2 === 0, 'order-lg-1': i % 2 !== 0}">
              <a href="#" class="effect">
                <img [src]="item.imageUrl" alt="" class="img-fluid">
              </a>
            </div>
            <div class="col-lg-5 mr-auto align-self-center"
              [ngClass]="{'order-lg-1': i % 2 === 0, 'order-lg-2': i % 2 !== 0, 'text-lg-right': i % 2 !== 0, 'text-lg-left': i % 2 === 0}">
              <h2 class="text-black">{{ item.title }}</h2>
              <p class="mb-4">{{ item.description }}</p>
              <!-- <a href="#" class="btn btn-about">{{ item.buttonText }}</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`;
  }
});

// angular:jit:style:src/app/pages/explore/explore.component.css
var explore_component_default2;
var init_explore_component2 = __esm({
  "angular:jit:style:src/app/pages/explore/explore.component.css"() {
    explore_component_default2 = '@import "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Lavishly+Yours&family=Monsieur+La+Doulaise&display=swap";\n@import "https://fonts.googleapis.com/css?family=Roboto+Mono";\n\n/* src/app/pages/explore/explore.component.css */\n.explore-page {\n  opacity: 0;\n  transform: translateY(50px);\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n}\n@media screen {\n  .explore-page {\n    width: 100%;\n  }\n}\n.hero-section1 {\n  position: relative;\n  width: 100%;\n  height: 75vh;\n  overflow: hidden;\n}\n.hero-slideshow {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.hero-slide {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n}\n.hero-slide.active {\n  opacity: 1;\n}\n.hero-overlay1 {\n  top: 0;\n  left: 15%;\n  width: 70%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  padding: 10px 20px;\n  bottom: 20px;\n  border-radius: 10px;\n}\n.hero-overlay12 {\n  top: 0;\n  width: 100%;\n  height: 100%;\n  left: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  padding: 10px 20px;\n  bottom: 20px;\n  border-radius: 10px;\n}\n.itinerary-container1 {\n  left: 10%;\n}\n.city-name {\n  font-family: "Lavishly Yours", cursive;\n  transform: rotate(-12deg);\n  font-size: 15vmax;\n  font-weight: 900;\n  text-align: center;\n  margin-left: 35%;\n  mix-blend-mode: difference;\n}\n.intro-section {\n  padding: 5rem 0;\n}\n.intro-section .container {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.intro-section .main-content {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.intro-section .title {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 1rem;\n}\n.intro-section .subtitle {\n  font-size: 1.5rem;\n  color: #2563eb;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  margin-top: 3rem;\n}\n.intro-section .description {\n  font-size: 1.125rem;\n  color: #374151;\n  line-height: 1.75;\n  max-width: 56rem;\n  margin: 0 auto;\n}\n.intro-section .highlights-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 4rem;\n}\n@media (min-width: 768px) {\n  .intro-section .title {\n    font-size: 4rem;\n  }\n  .intro-section .subtitle {\n    font-size: 2rem;\n  }\n  .intro-section .highlights-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.intro-section .highlight-card {\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border-radius: 1rem;\n  padding: 1.5rem;\n  text-align: center;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n}\n.intro-section .highlight-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.intro-section .highlight-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n  margin-top: 0.75rem;\n}\n.intro-section .highlight-value {\n  font-size: 2rem;\n  font-weight: 700;\n  padding: 15px;\n  color: #2563eb;\n  margin-bottom: 0.5rem;\n}\n.intro-section .highlight-title {\n  color: #6b7280;\n  font-weight: 500;\n}\n.intro-section .quick-facts {\n  background: rgba(255, 255, 255, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border-radius: 1.5rem;\n  padding: 2rem;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  margin-top: 2rem;\n}\n.intro-section .quick-facts-title {\n  font-size: 2rem;\n  font-weight: 700;\n  text-align: center;\n  color: #111827;\n  margin-bottom: 2rem;\n}\n.intro-section .facts-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.intro-section .fact-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #f0fdfa 100%);\n  transition: all 0.3s ease;\n}\n.intro-section .fact-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #bfdbfe 0%,\n      #ccfbf1 100%);\n}\n.intro-section .fact-icon {\n  flex-shrink: 0;\n  padding: 0.75rem;\n  background: #dbeafe;\n  border-radius: 50%;\n  color: #2563eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.intro-section .fact-label {\n  font-weight: 600;\n  color: #111827;\n}\n.intro-section .fact-value {\n  color: #2563eb;\n  font-weight: 500;\n}\n@media (max-width: 480px) {\n  .intro-section .facts-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 768px) {\n  .intro-section .facts-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .intro-section .facts-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.map-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.map-header {\n  text-align: center;\n  padding: 3rem 2rem 2rem;\n  background: white;\n}\n.map-header h1 {\n  font-size: 2.5rem;\n  font-weight: 300;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n  letter-spacing: -0.02em;\n}\n.map-header p {\n  font-size: 1.1rem;\n  color: #7f8c8d;\n  font-weight: 400;\n}\n.map-interface {\n  position: relative;\n  height: calc(100vh - 200px);\n  min-height: 600px;\n  display: flex;\n  background: white;\n}\n.satellite-map {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  background: #1a365d;\n}\n.map-background {\n  width: 100%;\n  height: 100%;\n  background-image:\n    radial-gradient(\n      circle at 20% 30%,\n      rgba(46, 125, 50, 0.3) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 60% 40%,\n      rgba(76, 175, 80, 0.4) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(139, 195, 74, 0.2) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 30% 70%,\n      rgba(46, 125, 50, 0.3) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 80%,\n      rgba(76, 175, 80, 0.2) 0%,\n      transparent 50%);\n  background-color: #0f172a;\n  background-size: 100% 100%;\n  position: relative;\n}\n.map-background::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 48%,\n      rgba(255, 255, 255, 0.03) 49%,\n      rgba(255, 255, 255, 0.03) 51%,\n      transparent 52%),\n    linear-gradient(\n      -45deg,\n      transparent 48%,\n      rgba(255, 255, 255, 0.03) 49%,\n      rgba(255, 255, 255, 0.03) 51%,\n      transparent 52%);\n  background-size: 20px 20px;\n}\n.location-marker {\n  position: absolute;\n  cursor: pointer;\n  z-index: 10;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.marker-dot {\n  width: 12px;\n  height: 12px;\n  background: white;\n  border: 3px solid #3b82f6;\n  border-radius: 50%;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);\n  transition: all 0.3s ease;\n}\n.location-marker:hover .marker-dot,\n.location-marker.active .marker-dot {\n  width: 16px;\n  height: 16px;\n  border-width: 4px;\n  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);\n}\n.marker-label {\n  position: absolute;\n  top: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(255, 255, 255, 0.95);\n  color: #1e293b;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  letter-spacing: 0.5px;\n}\n.location-marker:hover .marker-label,\n.location-marker.active .marker-label {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(-5px);\n}\n.destination-card {\n  width: 400px;\n  background: white;\n  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);\n  z-index: 20;\n  position: relative;\n}\n.card-content {\n  padding: 3rem 2.5rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.card-content h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n  letter-spacing: -0.02em;\n}\n.card-content .category {\n  font-size: 0.9rem;\n  color: #3b82f6;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.card-content .description {\n  font-size: 1rem;\n  line-height: 1.7;\n  color: #4b5563;\n  margin-bottom: 2rem;\n  flex-grow: 1;\n}\n.destination-image {\n  width: 100%;\n  height: 200px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  margin-top: auto;\n}\n.destination-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.destination-image:hover img {\n  transform: scale(1.05);\n}\n.navigation-controls {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  display: flex;\n  gap: 0.5rem;\n  z-index: 30;\n}\n.nav-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: none;\n  background: white;\n  color: #4b5563;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease;\n}\n.nav-btn:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);\n}\n.nav-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.nav-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n@media (max-width: 1024px) {\n  .map-interface {\n    flex-direction: column;\n    height: auto;\n  }\n  .destination-card {\n    width: 100%;\n    order: -1;\n  }\n  .satellite-map {\n    height: 400px;\n  }\n  .navigation-controls {\n    position: relative;\n    bottom: auto;\n    right: auto;\n    justify-content: center;\n    margin: 1rem 0;\n  }\n}\n@media (max-width: 768px) {\n  .map-header h1 {\n    font-size: 2rem;\n  }\n  .card-content {\n    padding: 2rem 1.5rem;\n  }\n  .card-content h2 {\n    font-size: 1.5rem;\n  }\n  .destination-image {\n    height: 150px;\n  }\n}\n.navigation-controls {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  display: flex;\n  gap: 0.5rem;\n  z-index: 30;\n}\n.nav-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: none;\n  background: white;\n  color: #4b5563;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease;\n}\n.nav-btn:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);\n}\n.nav-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.nav-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n@media (max-width: 1024px) {\n  .map-interface {\n    flex-direction: column;\n    height: auto;\n  }\n  .destination-card {\n    width: 100%;\n    order: -1;\n  }\n  .satellite-map {\n    height: 400px;\n  }\n  .navigation-controls {\n    position: relative;\n    bottom: auto;\n    right: auto;\n    justify-content: center;\n    margin: 1rem 0;\n  }\n}\n@media (max-width: 768px) {\n  .map-header h1 {\n    font-size: 2rem;\n  }\n  .card-content {\n    padding: 2rem 1.5rem;\n  }\n  .card-content h2 {\n    font-size: 1.5rem;\n  }\n  .destination-image {\n    height: 150px;\n  }\n}\n.custom-scrollbar::-webkit-scrollbar {\n  width: 6px;\n}\n.custom-scrollbar::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.custom-scrollbar::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.custom-scrollbar::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n* {\n  scroll-behavior: smooth;\n}\nbutton:focus-visible,\ninput:focus-visible {\n  outline: 2px solid #3b82f6;\n  outline-offset: 2px;\n}\n.scrollable-days-container {\n  max-height: 150vh;\n  overflow-y: auto;\n  padding: 20px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      to bottom,\n      #f8fafc,\n      #e2e8f0);\n}\n.hero-section {\n  height: 20vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.hero-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url(https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1920) center/cover;\n  opacity: 0.3;\n  z-index: 1;\n}\n.hero-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.8) 0%,\n      rgba(118, 75, 162, 0.8) 100%);\n  z-index: 2;\n}\n.hero-content {\n  text-align: center;\n  color: white;\n  z-index: 3;\n  position: relative;\n  padding: 0 20px;\n}\n.hero-title {\n  font-size: clamp(3rem, 8vw, 6rem);\n  font-weight: 800;\n  margin-bottom: 1rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  letter-spacing: -0.02em;\n}\n.hero-subtitle {\n  font-size: clamp(1.2rem, 3vw, 2rem);\n  font-weight: 300;\n  margin-bottom: 1rem;\n  opacity: 0.9;\n}\n.trip-dates {\n  font-size: 1.1rem;\n  font-weight: 500;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 12px 24px;\n  border-radius: 50px;\n  display: inline-block;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.day-navigation {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  transition: all 0.3s ease;\n  padding: 50px 0 0 0;\n}\n.day-navigation.sticky {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.nav-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.nav-days {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 5px 16px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.nav-days::-webkit-scrollbar {\n  display: none;\n}\n.day-btn {\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 500;\n  position: relative;\n  overflow: hidden;\n}\n.day-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.5s ease;\n}\n.day-btn:hover::before {\n  left: 100%;\n}\n.day-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);\n  border-color: #667eea;\n}\n.day-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-color: transparent;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);\n}\n.day-number {\n  font-size: 1.2rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.itinerary-content {\n  padding: 60px 0;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      to bottom,\n      #f8fafc,\n      #e2e8f0);\n}\n.day-section {\n  margin-bottom: 40px;\n  scroll-margin-top: 100px;\n}\n.day-header {\n  text-align: center;\n  margin-bottom: 40px;\n  position: relative;\n}\n.day-badge {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  padding: 8px 24px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n}\n.day-title {\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 700;\n  color: #2d3748;\n  margin-bottom: 8px;\n  margin-top: 18px;\n  line-height: 1.2;\n}\n.day-content {\n  display: grid;\n  gap: 40px;\n}\n.activity-card {\n  background: white;\n  border-radius: 24px;\n  padding: 32px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.activity-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.card-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.icon {\n  font-size: 1.2em;\n}\n.activity-details {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.detail-label {\n  font-weight: 600;\n  color: #4a5568;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value {\n  color: #2d3748;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.excursion-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.excursion-list li {\n  padding: 8px 0;\n  border-bottom: 1px solid #e2e8f0;\n  color: #2d3748;\n  position: relative;\n  padding-left: 24px;\n}\n.excursion-list li:last-child {\n  border-bottom: none;\n}\n.excursion-list li::before {\n  content: "\\2708\\fe0f";\n  position: absolute;\n  left: 0;\n  top: 8px;\n}\n.highlights {\n  margin-top: 20px;\n}\n.highlights-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #4a5568;\n  margin-bottom: 12px;\n}\n.highlight-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.highlight-tag {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  transition: transform 0.2s ease;\n}\n.highlight-tag:hover {\n  transform: scale(1.05);\n}\n.photo-section {\n  background: white;\n  border-radius: 24px;\n  padding: 32px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n}\n.photo-section:hover {\n  transform: translateY(-5px);\n}\n.photo-section-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.hotel-info {\n  margin-bottom: 24px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f7fafc,\n      #edf2f7);\n  border-radius: 16px;\n  border-left: 4px solid #667eea;\n}\n.hotel-name {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #2d3748;\n  margin-bottom: 8px;\n}\n.meal-plan {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #718096;\n  font-weight: 500;\n}\n.photo-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.hotel-photos {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.photo-card {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n  animation: fadeInUp 0.6s ease forwards;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.photo-card:hover {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n.hotel-photo {\n  aspect-ratio: 3/2;\n}\n.photo-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.photo-card:hover img {\n  transform: scale(1.1);\n}\n.photo-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\n  color: white;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.photo-card:hover .photo-overlay {\n  opacity: 1;\n}\n.photo-number {\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.photo-label {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .hero-title {\n    font-size: 3rem;\n  }\n  .hero-subtitle {\n    font-size: 1.2rem;\n  }\n  .day-navigation {\n    padding: 12px 0;\n  }\n  .nav-days {\n    gap: 6px;\n    padding: 0 12px;\n  }\n  .day-btn {\n    min-width: 70px;\n    padding: 10px 16px;\n  }\n  .day-number {\n    font-size: 1.1rem;\n  }\n  .itinerary-content {\n    padding: 40px 0;\n  }\n  .day-section {\n    margin-bottom: 60px;\n  }\n  .day-title {\n    font-size: 2rem;\n  }\n  .activity-card,\n  .photo-section {\n    padding: 24px;\n    border-radius: 20px;\n  }\n  .photo-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .hotel-photos {\n    grid-template-columns: 1fr;\n  }\n  .highlight-tags {\n    gap: 6px;\n  }\n  .highlight-tag {\n    font-size: 0.8rem;\n    padding: 5px 12px;\n  }\n}\n@media (max-width: 480px) {\n  .hero-content {\n    padding: 0 16px;\n  }\n  .trip-dates {\n    font-size: 0.95rem;\n    padding: 10px 20px;\n  }\n  .day-btn {\n    min-width: 60px;\n    padding: 8px 12px;\n  }\n  .day-number {\n    font-size: 1rem;\n  }\n  .activity-card,\n  .photo-section {\n    padding: 20px;\n  }\n  .detail-item {\n    gap: 6px;\n  }\n  .excursion-list li {\n    padding: 6px 0 6px 20px;\n    font-size: 0.95rem;\n  }\n  .photo-grid {\n    gap: 12px;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .day-navigation {\n    background: rgba(26, 32, 44, 0.95);\n    border-bottom-color: rgba(255, 255, 255, 0.1);\n  }\n  .day-btn {\n    background: #2d3748;\n    border-color: #4a5568;\n    color: #e2e8f0;\n  }\n  .day-btn:hover {\n    border-color: #667eea;\n  }\n  .activity-card,\n  .photo-section {\n    background: #2d3748;\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n  .card-title,\n  .photo-section-title,\n  .day-title {\n    color: #e2e8f0;\n  }\n  .detail-label,\n  .highlights-title {\n    color: #a0aec0;\n  }\n  .detail-value,\n  .excursion-list li {\n    color: #e2e8f0;\n  }\n  .hotel-info {\n    background: #1a202c;\n  }\n  .hotel-name {\n    color: #e2e8f0;\n  }\n  .meal-plan {\n    color: #a0aec0;\n  }\n}\n.about-section {\n  margin-top: 5rem;\n}\n.heading-section {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n.heading-section h2 {\n  color: #000;\n  margin-bottom: 0.5rem;\n}\n.img-wrap {\n  margin-bottom: 5rem;\n}\n.img-wrap .effect {\n  position: relative;\n  margin-bottom: 0;\n  display: block;\n}\n.img-fluid {\n  border-radius: 15px;\n}\n.img-wrap .effect:after {\n  content: "";\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n  border-radius: 15px;\n  left: 10px;\n  background: #011525;\n  transition: .3s all ease-in-out;\n  z-index: -1;\n}\n.img-wrap:hover .effect:after {\n  right: -10px;\n  bottom: -10px;\n}\n.btn-about {\n  background-color: #030157 !important;\n  color: #fff !important;\n  margin-right: 5px;\n  margin-left: 5px;\n  animation: skew 3s infinite;\n  animation-direction: normal;\n  transform: skew(20deg);\n  animation-direction: alternate;\n  padding: 5px 17px;\n}\n@keyframes skew {\n  0% {\n    transform: skewX(20deg);\n  }\n  100% {\n    transform: skewX(-20deg);\n  }\n}\n#flip-card-services * {\n  box-sizing: border-box;\n  font-weight: normal;\n}\n#flip-card-services {\n  text-align: center;\n  font-family: "Roboto Mono", monospace;\n  padding: 1em;\n}\n#flip-card-services h2 {\n  font-size: 2.2em;\n  margin-bottom: 20px;\n  color: #333;\n}\n#flip-card-services .section-title p {\n  font-size: 1rem;\n  color: #666;\n}\n.flip-cards-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 15px;\n  padding: 10px;\n}\n.flip-card-wrapper {\n  flex: 0 0 calc(25% - 15px);\n  box-sizing: border-box;\n}\n.row {\n  margin-bottom: 20px;\n}\n.flip-card {\n  width: 100%;\n  height: 200px;\n  perspective: 1000px;\n}\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-size: cover;\n  background-position: center;\n  color: white;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.flip-card-front {\n  background-color: #313131;\n  transform: rotateY(0deg);\n}\n.flip-card-back {\n  background-color: #6f42c1;\n  transform: rotateY(180deg);\n}\n.flip-card:hover .flip-card-front {\n  transform: rotateY(180deg);\n}\n.flip-card:hover .flip-card-back {\n  transform: rotateY(0deg);\n}\n.flip-card-text-shadow {\n  text-shadow:\n    1px 1px rgba(0, 0, 0, 0.04),\n    2px 2px rgba(0, 0, 0, 0.04),\n    3px 3px rgba(0, 0, 0, 0.04);\n}\n@media (max-width: 1200px) {\n  .flip-card-wrapper {\n    flex: 0 0 calc(33.333% - 15px);\n  }\n}\n@media (max-width: 992px) {\n  .flip-card-wrapper {\n    flex: 0 0 calc(50% - 15px);\n  }\n}\n@media (max-width: 768px) {\n  .flip-card-wrapper {\n    flex: 0 0 100%;\n  }\n}\n.mat-typography.dark {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 50%,\n      #334155 100%);\n  min-height: 100vh;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  color: #e2e8f0;\n  overflow-x: hidden;\n}\n.switch-wrap {\n  position: fixed;\n  top: 30px;\n  right: 30px;\n  z-index: 1000;\n}\n#switch {\n  width: 60px;\n  height: 30px;\n  background: rgba(30, 41, 59, 0.8);\n  border-radius: 25px;\n  border: 2px solid #475569;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n#switch:hover {\n  border-color: #06b6d4;\n  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);\n}\n#circle {\n  width: 22px;\n  height: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  border-radius: 50%;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  box-shadow: 0 2px 10px rgba(6, 182, 212, 0.4);\n}\n#switch.active #circle {\n  left: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  box-shadow: 0 2px 10px rgba(245, 158, 11, 0.4);\n}\n.section {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n}\n.case-study-wrapper-container {\n  flex: 1;\n  max-width: 400px;\n  padding: 60px 40px;\n  background: rgba(15, 23, 42, 0.95);\n  border-right: 1px solid rgba(71, 85, 105, 0.3);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  z-index: 10;\n  position: relative;\n}\n.case-study-wrapper-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(6, 182, 212, 0.05) 0%,\n      transparent 50%,\n      rgba(139, 92, 246, 0.05) 100%);\n  pointer-events: none;\n}\n.case-study-wrapper {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  animation: fadeInUp 0.8s ease-out forwards;\n}\n.case-study-wrapper:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.case-study-wrapper:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.case-study-wrapper:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.case-study-wrapper:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.case-study-name {\n  margin-bottom: 30px;\n  position: relative;\n}\n.case-study-name::before {\n  content: "";\n  position: absolute;\n  left: -20px;\n  top: 50%;\n  width: 4px;\n  height: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #8b5cf6);\n  border-radius: 2px;\n  transition: height 0.3s ease-out;\n  transform: translateY(-50%);\n}\n.case-study-name:hover::before {\n  height: 100%;\n}\n.case-study-name a {\n  color: #e2e8f0;\n  text-decoration: none;\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  position: relative;\n  padding: 15px 20px;\n  display: block;\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  background: rgba(30, 41, 59, 0.3);\n  border: 1px solid rgba(71, 85, 105, 0.2);\n}\n.case-study-name a::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #06b6d4,\n      #8b5cf6);\n  transition: all 0.3s ease-out;\n  transform: translateX(-50%);\n}\n.case-study-name a:hover {\n  color: #06b6d4;\n  background: rgba(6, 182, 212, 0.1);\n  border-color: rgba(6, 182, 212, 0.3);\n  transform: translateX(10px);\n  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.2);\n}\n.case-study-name a:hover::after {\n  width: 100%;\n}\n.case-study-images {\n  flex: 2;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n}\n.case-study-images li {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.case-study-images li:first-child {\n  opacity: 1;\n}\n.case-study-images li.active {\n  opacity: 1;\n  z-index: 2;\n}\n.img-hero-background {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.image-wrapper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.image-wrapper img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  filter: brightness(0.8) contrast(1.1);\n}\n.image-wrapper:hover img {\n  transform: scale(1.05);\n}\n.image-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(6, 182, 212, 0.1) 0%,\n      rgba(139, 92, 246, 0.1) 50%,\n      rgba(15, 23, 42, 0.3) 100%);\n  opacity: 0.7;\n  transition: opacity 0.3s ease-out;\n}\n.image-wrapper:hover .image-overlay {\n  opacity: 0.5;\n}\n.hero-number-back,\n.hero-number,\n.hero-number-fixed {\n  position: absolute;\n  font-weight: 900;\n  color: rgba(226, 232, 240, 0.1);\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n.hero-number-back {\n  font-size: clamp(200px, 25vw, 400px);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n.hero-number {\n  font-size: clamp(80px, 12vw, 160px);\n  top: 60px;\n  right: 60px;\n  z-index: 5;\n  color: #06b6d4;\n  text-shadow: 0 0 20px rgba(6, 182, 212, 0.6);\n  animation: pulse 2s infinite;\n}\n.hero-number-fixed {\n  font-size: 24px;\n  bottom: 60px;\n  right: 60px;\n  z-index: 5;\n  color: #64748b;\n  background: rgba(15, 23, 42, 0.8);\n  padding: 10px 15px;\n  border-radius: 8px;\n  border: 1px solid rgba(71, 85, 105, 0.3);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.hero-number-fixed::before {\n  content: "Total: ";\n  font-size: 14px;\n  opacity: 0.7;\n}\n.link-to-portfolio {\n  position: fixed;\n  bottom: 30px;\n  left: 30px;\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #8b5cf6);\n  border-radius: 50%;\n  z-index: 1000;\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  box-shadow: 0 5px 20px rgba(6, 182, 212, 0.4);\n}\n.link-to-portfolio::before {\n  content: "\\2197";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n.link-to-portfolio:hover {\n  transform: scale(1.1) rotate(10deg);\n  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.6);\n}\n.hover-target {\n  cursor: pointer;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.8;\n    transform: scale(1.05);\n  }\n}\n@media (max-width: 1024px) {\n  .section {\n    flex-direction: column;\n  }\n  .case-study-wrapper-container {\n    max-width: 100%;\n    padding: 40px 20px;\n  }\n  .case-study-images {\n    min-height: 60vh;\n  }\n  .hero-number {\n    top: 30px;\n    right: 30px;\n  }\n  .hero-number-fixed {\n    bottom: 30px;\n    right: 30px;\n  }\n}\n@media (max-width: 768px) {\n  .case-study-name a {\n    font-size: 20px;\n    padding: 12px 15px;\n  }\n  .hero-number-back {\n    font-size: clamp(120px, 30vw, 200px);\n  }\n  .switch-wrap,\n  .link-to-portfolio {\n    display: none;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(30, 41, 59, 0.5);\n}\n::-webkit-scrollbar-thumb {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #8b5cf6);\n  border-radius: 4px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0891b2,\n      #7c3aed);\n}\n.case-study-wrapper.loading {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.image-wrapper.loading::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(6, 182, 212, 0.3);\n  border-top: 3px solid #06b6d4;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  transform: translate(-50%, -50%);\n}\n@keyframes spin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n.case-study-name a:focus {\n  outline: 2px solid #06b6d4;\n  outline-offset: 2px;\n}\n#switch:focus {\n  outline: 2px solid #06b6d4;\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=explore.component.css.map */\n';
  }
});

// src/app/pages/explore/explore.component.ts
var ExploreComponent;
var init_explore_component3 = __esm({
  "src/app/pages/explore/explore.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_explore_component();
    init_explore_component2();
    init_core();
    init_router();
    init_common();
    init_forms();
    init_travel_data_service();
    init_auth_service();
    init_ngx_cookie_service();
    init_gsap();
    ExploreComponent = class ExploreComponent2 {
      route;
      travelData;
      authService;
      cookieService;
      container;
      mapContainer;
      destinationId = null;
      selectedDestination = null;
      hotelPhotoLabels = [];
      activeSlide = 0;
      selectedLocations = [];
      totalDays = 0;
      expandedDay = null;
      selectedLocationId = null;
      heroLocations = [];
      trendyLocations = [];
      isNavSticky = false;
      mappingDetails = {};
      activeDay = null;
      activeMarkerId = null;
      currentIndex = 0;
      filteredPlaces = [];
      dayRanges = [];
      constructor(route, travelData, authService, cookieService) {
        this.route = route;
        this.travelData = travelData;
        this.authService = authService;
        this.cookieService = cookieService;
        this.heroLocations = this.travelData.getHeroLocations();
        this.trendyLocations = this.travelData.getTrendyLocations();
      }
      ngAfterViewInit() {
        gsapWithCSS.to(this.container.nativeElement, {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out"
        });
      }
      ngOnInit() {
        const storedLocation = this.cookieService.get("selectedLocation");
        if (storedLocation) {
          this.selectedLocationId = storedLocation;
        }
        this.destinationId = this.route.snapshot.paramMap.get("destinationId");
        if (this.destinationId) {
          this.selectedDestination = this.travelData.getLocationById(this.destinationId);
          this.totalDays = this.selectedDestination.itinerary ? this.selectedDestination.itinerary.length : 0;
          this.hotelPhotoLabels = this.travelData.getHotelPhotoLabels(this.destinationId, 1);
          this.mappingDetails = this.selectedDestination.mappingDetails;
          if (this.selectedDestination?.topImages?.length > 0) {
            setInterval(() => {
              this.activeSlide = (this.activeSlide + 1) % this.selectedDestination.topImages.length;
            }, 4e3);
          }
          if (this.mappingDetails.length > 0) {
            this.currentIndex = 0;
            this.activeMarkerId = this.mappingDetails[this.currentIndex].id;
          }
        }
      }
      setSelectedDestination(destination, index) {
        this.selectedDestination = destination;
        this.currentIndex = index;
        this.activeMarkerId = destination.id;
      }
      // Update nextDestination to set activeMarkerId
      nextDestination() {
        if (this.mappingDetails.length === 0)
          return;
        this.currentIndex = (this.currentIndex + 1) % this.mappingDetails.length;
        this.activeMarkerId = this.mappingDetails[this.currentIndex].id;
      }
      // Update prevDestination to set activeMarkerId
      prevDestination() {
        if (this.mappingDetails.length === 0)
          return;
        this.currentIndex = (this.currentIndex - 1 + this.mappingDetails.length) % this.mappingDetails.length;
        this.activeMarkerId = this.mappingDetails[this.currentIndex].id;
      }
      scrollToDay(dayNumber) {
        const container = document.querySelector(".scrollable-days-container");
        const dayElement = document.getElementById(`day-${dayNumber}`);
        if (container && dayElement) {
          dayElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }
      getHotelPhotoLabel(day, index) {
        const labels = ["Suite", "Pool", "Lobby", "Restaurant", "Spa", "Garden"];
        return labels[index] || `View ${index + 1}`;
      }
      static ctorParameters = () => [
        { type: ActivatedRoute },
        { type: TravelDataService },
        { type: AuthService },
        { type: CookieService }
      ];
      static propDecorators = {
        container: [{ type: ViewChild, args: ["container"] }],
        mapContainer: [{ type: ViewChild, args: ["map"] }]
      };
    };
    ExploreComponent = __decorate([
      Component({
        selector: "app-explore",
        standalone: true,
        template: explore_component_default,
        imports: [CommonModule, NgClass, FormsModule],
        styles: [explore_component_default2]
      })
    ], ExploreComponent);
  }
});

// src/app/pages/explore/explore.component.spec.ts
var require_explore_component_spec = __commonJS({
  "src/app/pages/explore/explore.component.spec.ts"(exports) {
    init_testing();
    init_explore_component3();
    describe("ExploreComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ExploreComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ExploreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_explore_component_spec();
//# sourceMappingURL=spec-app-pages-explore-explore.component.spec.js.map
