import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelPlanner } from './travel-planner';

describe('TravelPlanner', () => {
  let component: TravelPlanner;
  let fixture: ComponentFixture<TravelPlanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelPlanner],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelPlanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
