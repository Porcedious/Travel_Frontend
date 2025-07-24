import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { TravelFormData, ApiResponse } from "../model/travel-form.model"

@Injectable({
  providedIn: "root",
})
export class TravelApiService {
  private apiUrl = "/api/travel-preferences"

  constructor(private http: HttpClient) {}

  submitTravelPreferences(data: TravelFormData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, data)
  }
}
