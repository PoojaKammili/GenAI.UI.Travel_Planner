import { Routes } from '@angular/router';
import {TravelResult} from './components/travel-result/travel-result';
import { TravelPlanner } from './components/travel-planner/travel-planner';

export const routes: Routes = [ {
    path: '',
    redirectTo: 'travel',
    pathMatch: 'full'
  },
  {
    path: 'travel',
    component: TravelPlanner
  },
  {
    path: 'plan',
    component: TravelResult
  }];
