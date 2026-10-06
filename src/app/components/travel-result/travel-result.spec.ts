import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelResult } from './travel-result';

describe('TravelResult', () => {
  let component: TravelResult;
  let fixture: ComponentFixture<TravelResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelResult],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
