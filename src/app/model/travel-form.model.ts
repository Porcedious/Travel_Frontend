export interface TravelFormData {
  name: string
  email: string
  phone: string
  destinations: string[]
  travelDates: string
  budget: string
  travelers: number
  tripType: string
  specialRequests: string
}

export interface ApiResponse {
  success: boolean
  message: string
  data?: any
}
