import { TestBed, inject } from '@angular/core/testing';

import { HouseService } from './house.service';

describe('HouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseService]
    });
  });

  it('should ...', inject([HouseService], (service: HouseService) => {
    expect(service).toBeTruthy();
  }));
});
