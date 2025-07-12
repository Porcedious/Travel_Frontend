import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/home-data.service.ts
var HomeDataService;
var init_home_data_service = __esm({
  "src/app/services/home-data.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    HomeDataService = class HomeDataService2 {
      homePageData = {
        testimony: [
          {
            id: 1,
            name: "Sarah Johnson",
            location: "New York, USA",
            rating: 5,
            text: "Absolutely amazing experience! The personalized itinerary was perfect and the 24/7 support made our trip stress-free. Every detail was taken care of.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            tripDestination: "Bali, Indonesia"
          },
          {
            id: 2,
            name: "Michael Chen",
            location: "London, UK",
            rating: 5,
            text: "Best travel agency I've ever used. The visa-free packages saved us so much time and hassle. The local guides were knowledgeable and friendly.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            tripDestination: "Thailand & Malaysia"
          },
          {
            id: 3,
            name: "Emma Rodriguez",
            location: "Barcelona, Spain",
            rating: 5,
            text: "The price guarantee is real! They matched a competitor's price and gave us even better service. Our honeymoon was magical thanks to their planning.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            tripDestination: "Santorini, Greece"
          }
        ]
      };
      getHomePageData() {
        return this.homePageData;
      }
    };
    HomeDataService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], HomeDataService);
  }
});

export {
  HomeDataService,
  init_home_data_service
};
//# sourceMappingURL=chunk-55C7EEVE.js.map
