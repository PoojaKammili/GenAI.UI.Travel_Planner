import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TravelRequest} from '../interfaces/travel-request';
import { BehaviorSubject, Observable } from 'rxjs';
import { TravelPlan } from '../interfaces/travel-plan';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private apiUrl = 'https://localhost:7234/api/Travel/plan';

  constructor(private http: HttpClient) {}

  createTravelPlan(request: TravelRequest):Observable<TravelPlan> {
 return this.http.post<TravelPlan>(this.apiUrl, request);
  }

  private travelPlanSubject = new BehaviorSubject<TravelPlan | null>(null);
  travelPlan$ = this.travelPlanSubject.asObservable();

  setTravelPlan(plan: TravelPlan) {
  this.travelPlanSubject.next(plan);
}

}