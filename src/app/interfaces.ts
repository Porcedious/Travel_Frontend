// Add this import at the top
import { HttpErrorResponse } from '@angular/common/http';

// Update your interfaces
export interface Itinerary {
  id: string;
  userId: string;
  locations: string[];
  content: DayItinerary[]; // Changed to match template
  created_at: Date;
  destination: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  details: string;
}

export interface ItineraryPayload {
  userId: string;
  locations: string[];
  days: number;
  budget: string;
  travelerType: string;
  destination: string; // Added missing property
}