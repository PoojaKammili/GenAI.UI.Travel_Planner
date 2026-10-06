import { Component } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { TravelPlan } from '../../interfaces/travel-plan';

@Component({
  selector: 'app-travel-result',
  standalone: true,
  imports: [],
  templateUrl: './travel-result.html',
  styleUrl: './travel-result.css'
})
export class TravelResult {

  travelPlan: TravelPlan | null = null;

  constructor(private travelService: TravelService) {

    this.travelService.travelPlan$.subscribe(plan => {
      this.travelPlan = plan;
    });

  }
}