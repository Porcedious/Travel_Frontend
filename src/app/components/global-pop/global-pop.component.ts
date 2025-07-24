import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Subscription } from "rxjs";
import { PopupServiceService } from "../../services/popup.service.service";
import { TravelApiService } from "../../services/travel-api.service.service";
import { TravelDataService } from "../../services/travel-data.service";
import { TravelFormData } from "../../model/travel-form.model";

interface Destination {
  id: string;
  name: string;
  description: string;
  heroImage: string;
}

@Component({
  selector: "app-global-popup",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./global-pop.component.html",
  styleUrls: ["./global-pop.component.css"],
})
export class GlobalPopComponent implements OnInit, OnDestroy {
  isOpen = false;
  currentStep = 1;
  totalSteps = 3;
  isSubmitting = false;
  submitMessage = "";

  // Form data
  formData: TravelFormData = {
    name: "",
    email: "",
    phone: "",
    destinations: [],
    travelDates: "",
    budget: "",
    travelers: 1,
    tripType: "",
    specialRequests: "",
  };

  // Destination dropdown
  destinationInput = "";
  availableDestinations: Destination[] = [];
  filteredDestinations: Destination[] = [];
  showDestinationDropdown = false;

  // Trip types
  tripTypes = ["Solo Travel" , "Couple" , "Family" , "Group Travel"];

  private subscription = new Subscription();

  constructor(
    private popupService: PopupServiceService,
    private travelApiService: TravelApiService,
    private travelDataService: TravelDataService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.popupService.isOpen$.subscribe((isOpen: boolean) => {
        this.isOpen = isOpen;
        if (isOpen) {
          document.body.style.overflow = 'hidden';
          this.loadDestinations(); // Load destinations when popup is opened
        } else {
          document.body.style.overflow = 'auto';
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    document.body.style.overflow = 'auto';
  }

  loadDestinations() {
    // Load all destinations from TravelDataService
    this.availableDestinations = this.travelDataService.getAllLocations().map((location) => ({
      id: location.id,
      name: location.name,
      description: location.description,
      heroImage: location.heroImage,
    }));
  }

  onDestinationInput() {
    if (this.destinationInput.trim()) {
      this.filteredDestinations = this.availableDestinations.filter(
        (dest) =>
          dest.name.toLowerCase().includes(this.destinationInput.toLowerCase()) ||
          dest.description.toLowerCase().includes(this.destinationInput.toLowerCase())
      );
      this.showDestinationDropdown = this.filteredDestinations.length > 0;
    } else {
      this.showDestinationDropdown = false;
    }
  }

  onDestinationFocus() {
    if (this.destinationInput.trim()) {
      this.onDestinationInput();
    }
  }

  onDestinationBlur() {
    // Delay hiding dropdown to allow for clicks
    setTimeout(() => {
      this.showDestinationDropdown = false;
    }, 200);
  }

  selectDestination(destination: Destination) {
    if (!this.formData.destinations.includes(destination.name)) {
      this.formData.destinations.push(destination.name);
    }
    this.destinationInput = "";
    this.showDestinationDropdown = false;
  }

  addDestination() {
    const destination = this.destinationInput.trim();
    if (destination && !this.formData.destinations.includes(destination)) {
      this.formData.destinations.push(destination);
      this.destinationInput = "";
      this.showDestinationDropdown = false;
    }
  }

  onDestinationKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (this.filteredDestinations.length > 0) {
        this.selectDestination(this.filteredDestinations[0]);
      } else {
        this.addDestination();
      }
    }
  }

  removeDestination(index: number) {
    this.formData.destinations.splice(index, 1);
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  async submitForm() {
    if (!this.isFormValid()) {
      return;
    }
    this.isSubmitting = true;
    this.submitMessage = "";
    try {
      const response = await this.travelApiService.submitTravelPreferences(this.formData).toPromise();
      this.submitMessage = "Thank you! Your travel preferences have been submitted successfully.";
      // Close popup after 2 seconds
      setTimeout(() => {
        this.closePopup();
      }, 2000);
    } catch (error) {
      this.submitMessage = "Sorry, there was an error submitting your request. Please try again.";
      console.error("Form submission error:", error);
    } finally {
      this.isSubmitting = false;
    }
  }

  isFormValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!(this.formData.name && this.formData.email && this.formData.phone);
      case 2:
        return !!(this.formData.destinations.length > 0 && this.formData.travelDates);
      case 3:
        return !!(this.formData.budget && this.formData.tripType);
      default:
        return false;
    }
  }

  resetForm() {
    this.currentStep = 1;
    this.isSubmitting = false;
    this.submitMessage = "";
    this.destinationInput = "";
    this.showDestinationDropdown = false;
    this.formData = {
      name: "",
      email: "",
      phone: "",
      destinations: [],
      travelDates: "",
      budget: "",
      travelers: 1,
      tripType: "",
      specialRequests: "",
    };
  }

  closePopup() {
    this.popupService.closePopup();
    this.resetForm();
  }
}
