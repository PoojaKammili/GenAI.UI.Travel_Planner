import { Component } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TravelRequest } from '../../interfaces/travel-request';
import { TravelPlan } from '../../interfaces/travel-plan';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  standalone: true,
  selector: 'app-travel-planner',
  styleUrl: './travel-planner.css',
  templateUrl: './travel-planner.html',
})
export class TravelPlanner {

  travelPlan: TravelPlan | null = null;
  constructor(
  private travelService: TravelService,
  private router: Router
) {}

  travelForm = new FormGroup({
    destination : new FormControl('',Validators.required),
    days : new FormControl(1,[Validators.required,Validators.min(1)]),
    budget : new FormControl(0,[Validators.required,Validators.min(1)]),
    interests : new FormControl('',Validators.required)
  });

  
  onSubmit() {
  if (this.travelForm.valid) {

    this.travelService.createTravelPlan(this.travelForm.value as TravelRequest)
    .subscribe({
      next: response => {
        this.travelService.setTravelPlan(response);
        this.router.navigate(['/plan']);
      },
      error: error => {
        console.error('API Error:', error);
      }
    });

  }
}
}
