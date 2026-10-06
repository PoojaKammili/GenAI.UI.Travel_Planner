import { TravelDay } from './travel-day';

export interface TravelPlan {
  destination: string;
  days: TravelDay[];
  totalEstimatedCost: number;
}