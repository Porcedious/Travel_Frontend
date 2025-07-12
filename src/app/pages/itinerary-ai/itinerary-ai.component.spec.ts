import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryAiComponent } from './itinerary-ai.component';

describe('ItineraryAiComponent', () => {
  let component: ItineraryAiComponent;
  let fixture: ComponentFixture<ItineraryAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItineraryAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
