import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItineraryPayload } from '../../app/interfaces'; // Adjust path if needed

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  constructor(private http: HttpClient) {}

  // Updated to accept ItineraryPayload instead of just locations array
  generateItinerary(payload: ItineraryPayload): Observable<any> {
    return this.http.post('/api/itineraries/generate', payload); // Send the full payload
  }

  saveDraft(draftData: any): Observable<any> {
    return this.http.post('/api/itineraries/drafts', draftData);
  }
}
