import { TestBed } from '@angular/core/testing';

import { TravelApiServiceService } from './travel-api.service.service';

describe('TravelApiServiceService', () => {
  let service: TravelApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
