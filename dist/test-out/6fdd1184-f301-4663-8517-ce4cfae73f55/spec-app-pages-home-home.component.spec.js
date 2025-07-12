import {
  HomeDataService,
  init_home_data_service
} from "./chunk-55C7EEVE.js";
import {
  TravelDataService,
  init_travel_data_service
} from "./chunk-5SDFLPWZ.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-YGAVFKBD.js";
import {
  CommonModule,
  init_common
} from "./chunk-OFHRICUK.js";
import "./chunk-FI3XTIHJ.js";
import "./chunk-ZCYQ42IE.js";
import {
  ChangeDetectorRef,
  Component,
  TestBed,
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

// angular:jit:template:src/app/pages/home/home.component.html
var home_component_default;
var init_home_component = __esm({
  "angular:jit:template:src/app/pages/home/home.component.html"() {
    home_component_default = `<div class="hero">
  <div class="hero-slides">
    <div class="slide" *ngFor="let slide of slides; let i = index" [ngClass]="{ 'active': i === activeSlide }"
      [style.backgroundImage]="'url(' + slide.heroImage + ')'">
      <div class="hero-content">
        <h1 class="main-heading">{{ slide.name }}</h1>
        <p class="subheading">{{ slide.description }}</p>
        <button class="explore-btn" [routerLink]="['/explore', slides[activeSlide].id]">
          Start Exploring \u2192
        </button>
      </div>
    </div>
  </div>
</div>


<div class="why-us-section">
  <h2>Why Choose Us?</h2>
  <p>Experience the difference - we redefine travel with our exclusive benefits!</p>

  <div class="usp-container">

    <!-- \u2705 Expllinger 24/7 Support -->
    <div class="usp-box">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#80ced6"
        style="height: 4vh; width: 6vw;" class="text-blue-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
      
      <h3>Expllinger Assistance</h3>
      <p>A dedicated 24/7 chat support representative is assigned to every traveler, ensuring seamless assistance
        before, during, and after the trip.</p>
      <!-- <button class="know-more-btn">Know More</button> -->
    </div>

    <!-- \u2705 World View (Global Destinations) -->
    <div class="usp-box">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#80ced6"
        style="height: 4vh; width: 6vw;" class="text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
        </svg>
        

      <h3>World View</h3>
      <p>We provide travel services for a vast range of destinations across the globe, making it easy for travelers to
        explore new places.</p>
      <!-- <button class="know-more-btn">Know More</button> -->
    </div>

    <!-- \u2705 Best Price Guarantee -->
    <div class="usp-box">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#80ced6"
        style="height: 4vh; width: 6vw;" class="text-blue-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0
            1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12
            12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303
            0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18
            0 9 9 0 0 1 18 0Z" />
      </svg>

      <h3>Best Price Guarantee</h3>
      <p>We ensure the most competitive prices in the market without compromising on quality, so travelers get the best
        deals.</p>
      <!-- <button class="know-more-btn">Know More</button> -->
    </div>

    <!-- \u2705 Personalized Itineraries -->
    <div class="usp-box">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#80ced6"
        style="height: 4vh; width: 6vw;" class="text-blue-500">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>

      <h3>Personalized Itineraries</h3>
      <p>Every traveler has unique preferences, and we craft tailor-made itineraries to suit their interests, budget,
        and schedule.</p>
      <!-- <button class="know-more-btn">Know More</button> -->
    </div>

  </div>
</div>


  
  

  <section class="travel-section">
    <!-- Featured Destinations -->
    <div class="destinations-header">
      <h2 class="destinations-title">Featured Destinations</h2>
      <p class="destinations-subtitle">Discover the world's most breathtaking locations</p>
    </div>
    <div class="travel-grid">
      <a *ngFor="let destination of featuredDestinations" [routerLink]="['/explore', destination.id]" class="travel-card">
        <div class="travel-image-container">
          <img [src]="destination.heroImage" [alt]="destination.name" class="travel-image">
          <div class="travel-overlay"></div>
          <div class="travel-name">
            <h3>{{ destination.destinationName.toUpperCase() }}</h3>
            <div class="mobile-details">
              <p class="duration">{{ destination.duration }}</p>
              <p class="price">Starting from \u20B9{{ destination.cost }}</p>
            </div>
          </div>
          <div class="travel-details">
            <p class="duration">{{ destination.duration }}</p>
            <p class="price">Starting from \u20B9{{ destination.cost }}</p>
          </div>
        </div>
      </a>
    </div>
  
    <!-- Visa-Free Escapades -->
    <div class="destinations-header">
      <h2 class="destinations-title">Visa-Free Escapades</h2>
      <p class="destinations-subtitle">Itineraries to explore the world\u2019s wonders without any visa hassles</p>
    </div>
    <div class="travel-grid">
      <a *ngFor="let package of featuredPackages" [routerLink]="['/explore', package.id]" class="travel-card">
        <div class="travel-image-container">
          <img [src]="package.heroImage" [alt]="package.title" class="travel-image">
          <div class="travel-overlay"></div>
          <div class="travel-name">
            <h3>{{ package.destinationName.toUpperCase() }}</h3>
            <div class="mobile-details">
              <p class="duration">{{ package.duration }}</p>
              <p class="price">Starting from \u20B9{{ package.cost }}</p>
            </div>
          </div>
          <div class="travel-details">
            <p class="duration">{{ package.duration }}</p>
            <p class="price">Starting from \u20B9{{ package.cost }}</p>
          </div>
        </div>
      </a>
    </div>
  </section>
  
  


  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <h2 class="section-title">What Our <span class="highlight">Travelers</span> Say</h2>
    <p class="section-description">
      Real stories from real travelers who trusted us with their adventures.
      Join thousands of satisfied customers who've experienced the world with us.
    </p>
    <div class="rating-container">
      <div class="star-rating">
        <span class="star">\u2605</span>
        <span class="star">\u2605</span>
        <span class="star">\u2605</span>
        <span class="star">\u2605</span>
        <span class="star">\u2605</span>
      </div>
      <span class="rating-text">4.9/5 from 2,500+ reviews</span>
    </div>

    <div class="testimonials-grid">
      <div class="testimonial-card" *ngFor="let testimonial of testimonials">
        <div class="testimonial-header">
          <img [src]="testimonial.image" [alt]="testimonial.name" class="testimonial-avatar">
          <div class="testimonial-info">
            <h3 class="testimonial-name">{{ testimonial.name }}</h3>
            <p class="testimonial-location">{{ testimonial.location }}</p>
            <p class="testimonial-destination">Trip to {{ testimonial.tripDestination }}</p>
            <div class="testimonial-rating">
              <span *ngFor="let star of [1, 2, 3, 4, 5]" class="rating-star">
                <span *ngIf="star <= testimonial.rating">\u2605</span>
                <span *ngIf="star > testimonial.rating">\u2606</span>
              </span>
            </div>
          </div>
        </div>
        <p class="testimonial-text">"{{ testimonial.text }}"</p>
        <div class="verified-badge">Verified Customer</div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="cta-container">
      <p class="cta-text">Ready to create your own amazing travel story?</p>
      <button class="cta-button">Start Planning Your Trip</button>
    </div>
  </section>`;
  }
});

// angular:jit:style:src/app/pages/home/home.component.css
var home_component_default2;
var init_home_component2 = __esm({
  "angular:jit:style:src/app/pages/home/home.component.css"() {
    home_component_default2 = '/* src/app/pages/home/home.component.css */\n.hero {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  position: relative;\n}\n.hero-slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  transition: transform 1s ease-in-out;\n}\n.slide {\n  flex: 0 0 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n}\n.slide::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 17%;\n  background:\n    linear-gradient(\n      to bottom,\n      rgb(0, 0, 0),\n      transparent);\n  z-index: 1;\n}\n.active {\n  opacity: 1;\n}\n.hero-content {\n  color: white;\n  text-align: left;\n  padding: 20px;\n  border-radius: 10px;\n  margin-left: calc(40px);\n}\n.subheading {\n  font-size: 22px;\n  margin-bottom: 12px;\n  font-weight: 300;\n  margin-left: 4px;\n}\n.main-heading {\n  font-size: 70px;\n  font-weight: bold;\n  margin: 25px 0;\n}\n.explore-btn {\n  border: none;\n  background: white;\n  padding: 15px 30px;\n  border-radius: 30px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.explore-btn:hover {\n  color: aqua;\n}\n.arrow {\n  font-weight: 1000px;\n}\n@media (max-width: 768px) {\n  .hero-content {\n    margin-left: 18px;\n    text-align: center;\n    width: 90%;\n  }\n  .main-heading {\n    font-size: 30px;\n    font-weight: 400px;\n  }\n  .subheading {\n    font-size: 15px;\n    font-weight: 200px;\n  }\n}\n.head {\n  text-align: left;\n  margin-left: calc(100px);\n  font-weight: 800;\n  margin-bottom: 30px;\n}\n.left-btn {\n  left: 10px;\n}\n.right-btn {\n  right: 10px;\n}\n.nav-btn:hover {\n  background: white;\n}\n.packages-section {\n  text-align: center;\n  padding: 50px 0;\n  background: white;\n  position: relative;\n  overflow: hidden;\n  max-height: 400px;\n}\n.packages-wrapper:not(.animate) {\n  transition: none !important;\n}\n.package-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n  transition: transform 1.8s ease-in-out, box-shadow 0.8s ease-in-out;\n}\n@media (max-width: 768px) {\n  .package-card {\n    flex: 0 0 100%;\n    height: 300px;\n  }\n}\n.package-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  color: whitesmoke;\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  font-family:\n    "Bookman",\n    "URW Bookman L",\n    serif;\n  transition: opacity 0.3s ease-in-out;\n  mix-blend-mode: difference;\n}\n.package-details {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 15px;\n  text-align: center;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n}\n.package-card:hover {\n  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n  transform: scale(1.06);\n  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);\n}\n.package-card:hover .package-info {\n  opacity: 0;\n}\n.package-card:hover .package-details {\n  opacity: 1;\n  transform: translateY(0);\n}\n.why-us-section {\n  text-align: center;\n  padding: 60px 15%;\n  background: #f9f9f9;\n}\n.usp-container {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  width: 100%;\n  min-height: 250px;\n}\n.usp-box {\n  flex: 0 0 calc(25% - 20px);\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  padding: 50px;\n  transition: transform 0.3s ease-in-out;\n  margin: 0 10px;\n}\n.usp-box svg {\n  height: 60px;\n  width: 60px;\n  margin-bottom: 15px;\n}\n.usp-box:hover {\n  transform: translateY(-10px);\n}\n@media (max-width: 900px) {\n  .usp-container {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .usp-box {\n    flex: 0 0 calc(50% - 20px);\n    margin: 10px;\n  }\n}\n@media (max-width: 600px) {\n  .usp-box {\n    flex: 0 0 100%;\n    margin: 10px;\n  }\n}\n@media (min-width: 900px) {\n  .usp-box {\n    flex: 1 1 calc(25% - 40px);\n  }\n  .usp-container {\n    gap: 40px;\n  }\n}\n.usp-box:hover {\n  transform: translateY(-10px);\n}\n.usp-box:hover {\n  transform: scale(1.05);\n}\n.know-more-btn {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 10px;\n}\n.know-more-btn:hover {\n  background: #0056b3;\n}\n@media (max-width: 768px) {\n  .usp-container {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.packages-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  gap: 1rem;\n  padding: 1rem;\n}\n.carousel-viewport {\n  overflow: hidden;\n  width: 80%;\n  position: relative;\n  height: 40vh;\n}\n.packages-wrapper {\n  display: flex;\n  transition: transform 0.5s ease-in-out;\n  gap: 1rem;\n}\n.package-card {\n  min-width: 250px;\n  background: #fff;\n  padding: 2rem;\n  height: 400px;\n  margin: 20px;\n  width: 40%;\n  border-radius: 1rem;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.nav-btn {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 2rem;\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  z-index: 10;\n  transition: background-color 0.3s ease;\n}\n.nav-btn:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.packages-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  overflow-x: hidden;\n}\n.carousel-viewport {\n  overflow: hidden;\n  width: 100%;\n  max-width: 1200px;\n  height: auto;\n}\n.package-card {\n  flex: 0 0 auto;\n  scroll-snap-align: start;\n  width: 300px;\n  background: white;\n  border-radius: 1rem;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);\n  padding: 1.5rem;\n  transition: transform 0.3s ease;\n}\n.package-card:hover {\n  transform: translateY(-5px);\n}\n.nav-btn {\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.destinations-section {\n  position: relative;\n  padding-top: 6rem;\n  padding-bottom: 4rem;\n  background:\n    linear-gradient(\n      to bottom right,\n      #f0f9ff,\n      #eef2ff);\n}\n.destinations-header {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background:\n    linear-gradient(\n      to bottom right,\n      #f0f9ff,\n      #eef2ff);\n  padding: 1rem 1rem;\n  text-align: center;\n}\n.destinations-title {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937,\n      #3b82f6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.destinations-subtitle {\n  font-size: 1.25rem;\n  color: #4b5563;\n  margin-bottom: 1rem;\n}\n.destinations-grid {\n  display: inline-flex;\n  gap: 16px;\n  overflow-x: auto;\n  padding: 0 10% 60px 10%;\n  width: 100%;\n  scroll-snap-type: x mandatory;\n}\n.destination-card {\n  scroll-snap-align: start;\n  position: relative;\n  width: 300px;\n  height: 500px;\n  border-radius: 0.75rem;\n  cursor: pointer;\n  overflow: hidden;\n  transition: transform 0.5s ease, box-shadow 0.5s ease;\n  flex: 0 0 auto;\n}\n.destination-card:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);\n}\n.destination-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.destination-card:hover .destination-image {\n  transform: scale(1.15);\n}\n.destination-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.8) 0%,\n      rgba(0, 0, 0, 0.4) 40%,\n      rgba(0, 0, 0, 0.1) 70%,\n      transparent 100%);\n  transition: opacity 0.3s ease;\n}\n.destination-name {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0.75rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  z-index: 10;\n  transition: transform 0.4s ease, opacity 0.4s ease;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.destination-details {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(100%);\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  color: #ffffff;\n  font-size: 0.95rem;\n  z-index: 10;\n  transition: all 0.4s ease-in-out;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.destination-card:hover .destination-details {\n  opacity: 1;\n  transform: translateY(0);\n}\n.destination-card:hover .destination-name {\n  transform: translateY(-100%);\n  opacity: 0;\n}\n.destinations-grid {\n  scroll-padding-left: 1rem;\n  scroll-padding-right: 1rem;\n}\n.mobile-details {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .mobile-details {\n    display: block;\n    margin-top: 0.5rem;\n    font-size: 0.9rem;\n    color: #f3f4f6;\n  }\n  .mobile-details .duration,\n  .mobile-details .price {\n    margin: 0;\n    line-height: 1.4;\n  }\n  .destination-details {\n    display: none !important;\n  }\n}\n@media (min-width: 1025px) {\n  .mobile-details {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .destinations-header {\n    padding: 1rem 5%;\n  }\n  .destinations-title {\n    font-size: 1.75rem;\n  }\n  .destinations-subtitle {\n    font-size: 1rem;\n  }\n  .destinations-grid {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .destination-card:first-child {\n    margin-left: 5%;\n  }\n}\n.testimonials-section {\n  padding: 2rem;\n  background-color:\n    linear-gradient(\n      to bottom right,\n      #f0f9ff,\n      #eef2ff);\n  text-align: center;\n}\n.section-title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  color: #1f2937;\n}\n.highlight {\n  color: #3b82f6;\n}\n.section-description {\n  font-size: 1.25rem;\n  color: #6b7280;\n  margin-bottom: 2rem;\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.rating-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.star-rating {\n  display: flex;\n  margin-right: 0.5rem;\n}\n.star {\n  color: #f59e0b;\n  font-size: 1.5rem;\n}\n.rating-text {\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n.testimonials-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n  justify-content: center;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.testimonial-card {\n  background-color: white;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.testimonial-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.testimonial-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.testimonial-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 1rem;\n}\n.testimonial-info {\n  text-align: left;\n}\n.testimonial-name {\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin: 0;\n}\n.testimonial-location,\n.testimonial-destination {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0.25rem 0;\n}\n.testimonial-rating {\n  display: flex;\n  margin-top: 0.5rem;\n}\n.rating-star {\n  color: #f59e0b;\n  font-size: 1rem;\n}\n.testimonial-text {\n  font-style: italic;\n  color: #4b5563;\n  margin-top: 1rem;\n  text-align: left;\n}\n.verified-badge {\n  margin-top: 1rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n  text-align: right;\n}\n.cta-container {\n  margin-top: 3rem;\n  text-align: center;\n}\n.cta-text {\n  font-size: 1.25rem;\n  color: #6b7280;\n  margin-bottom: 1rem;\n}\n.cta-button {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  border-radius: 9999px;\n  cursor: pointer;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.cta-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.travel-section {\n  position: relative;\n  padding-top: 2rem;\n  padding-bottom: 4rem;\n  background:\n    linear-gradient(\n      to bottom right,\n      #f0f9ff,\n      #eef2ff);\n}\n.destinations-header {\n  position: relative;\n  z-index: 20;\n  background:\n    linear-gradient(\n      to bottom right,\n      #f0f9ff,\n      #eef2ff);\n  padding: 1rem;\n  text-align: center;\n}\n.destinations-title {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1f2937,\n      #3b82f6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.destinations-subtitle {\n  font-size: 1.25rem;\n  color: #4b5563;\n  margin-bottom: 1rem;\n}\n.travel-grid {\n  display: inline-flex;\n  gap: 16px;\n  overflow-x: auto;\n  padding: 0 10% 60px 10%;\n  width: 100%;\n  scroll-snap-type: x mandatory;\n}\n.travel-card {\n  scroll-snap-align: start;\n  position: relative;\n  width: 300px;\n  height: 500px;\n  border-radius: 0.75rem;\n  cursor: pointer;\n  overflow: hidden;\n  transition: transform 0.5s ease, box-shadow 0.5s ease;\n  flex: 0 0 auto;\n}\n.travel-card:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);\n}\n.travel-image-container {\n  width: 100%;\n  height: 100%;\n}\n.travel-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.travel-card:hover .travel-image {\n  transform: scale(1.05);\n}\n.travel-card:hover .travel-image {\n  transform: scale(1.15);\n}\n.travel-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.8) 0%,\n      rgba(0, 0, 0, 0.4) 40%,\n      rgba(0, 0, 0, 0.1) 70%,\n      transparent 100%);\n}\n.travel-name {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0.75rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  z-index: 10;\n  transition: transform 0.4s ease, opacity 0.4s ease;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.travel-details {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(100%);\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  color: #ffffff;\n  font-size: 0.95rem;\n  z-index: 10;\n  transition: all 0.4s ease-in-out;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);\n  border-bottom-left-radius: 0.75rem;\n  border-bottom-right-radius: 0.75rem;\n}\n.travel-details {\n  position: absolute;\n  top: 99%;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  opacity: 0;\n  text-align: center;\n  color: white;\n  z-index: 10;\n  transition: all 0.4s ease-in-out;\n  width: 100%;\n  height: 30%;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.travel-card:hover .travel-details {\n  opacity: 1;\n  transform: translate(-50%, -50%);\n}\n.travel-card:hover .travel-name {\n  transform: translateY(-100%);\n  opacity: 0;\n}\n.travel-details .duration,\n.travel-details .price {\n  margin: 5px 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.mobile-details {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .mobile-details {\n    display: block;\n    margin-top: 0.5rem;\n    font-size: 0.9rem;\n    color: #f3f4f6;\n  }\n  .travel-details {\n    display: none !important;\n  }\n}\n@media (min-width: 1025px) {\n  .mobile-details {\n    display: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .destinations-header {\n    padding: 1rem 5%;\n  }\n  .destinations-title {\n    font-size: 1.75rem;\n  }\n  .destinations-subtitle {\n    font-size: 1rem;\n  }\n  .travel-grid {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n';
  }
});

// src/app/pages/home/home.component.ts
var HomeComponent;
var init_home_component3 = __esm({
  "src/app/pages/home/home.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_home_component();
    init_home_component2();
    init_core();
    init_common();
    init_router();
    init_travel_data_service();
    init_home_data_service();
    HomeComponent = class HomeComponent2 {
      travelDataService;
      homeDataService;
      router;
      cdr;
      slides = [];
      travelPackages = [];
      activeSlide = 0;
      clonedPackages = [];
      activeIndex = 0;
      translateX = -100;
      tilesPerSlide = window.innerWidth > 768 ? 4 : 1;
      isTransitioning = false;
      shouldAnimate = true;
      intervalheroId;
      featuredDestinations = [];
      testimonials = [];
      featuredPackages = [];
      constructor(travelDataService, homeDataService, router, cdr) {
        this.travelDataService = travelDataService;
        this.homeDataService = homeDataService;
        this.router = router;
        this.cdr = cdr;
      }
      ngOnInit() {
        this.slides = this.travelDataService.getHeroLocations();
        this.fetchTestimonials();
        this.fetchFeaturedDestinations();
        this.fetchFeaturedPackages();
        this.intervalheroId = setInterval(() => {
          this.activeSlide = (this.activeSlide + 1) % this.slides.length;
        }, 4e3);
      }
      fetchTestimonials() {
        const homePageData = this.homeDataService.getHomePageData();
        this.testimonials = homePageData.testimony;
        this.cdr.detectChanges();
      }
      fetchFeaturedDestinations() {
        const destinations = this.travelDataService.getAllLocations();
        const targetIds = ["Vietnam", "France", "maldives", "Andaman", "SriLanka"];
        this.featuredDestinations = destinations.filter((destination) => targetIds.includes(destination.id));
        console.log("Filtered destinations:", this.featuredDestinations);
      }
      fetchFeaturedPackages() {
        const packages = this.travelDataService.getAllLocations();
        const targetIds = ["Vietnam", "France", "maldives", "Andaman", "SriLanka"];
        this.featuredPackages = packages.filter((packageItem) => targetIds.includes(packageItem.id));
      }
      ngOnDestroy() {
        clearInterval(this.intervalheroId);
      }
      static ctorParameters = () => [
        { type: TravelDataService },
        { type: HomeDataService },
        { type: Router },
        { type: ChangeDetectorRef }
      ];
    };
    HomeComponent = __decorate([
      Component({
        selector: "app-home",
        standalone: true,
        template: home_component_default,
        imports: [CommonModule, RouterModule],
        styles: [home_component_default2]
      })
    ], HomeComponent);
  }
});

// src/app/pages/home/home.component.spec.ts
var require_home_component_spec = __commonJS({
  "src/app/pages/home/home.component.spec.ts"(exports) {
    init_testing();
    init_home_component3();
    describe("HomeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_component_spec();
//# sourceMappingURL=spec-app-pages-home-home.component.spec.js.map
