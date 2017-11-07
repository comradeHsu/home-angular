import { TestBed, inject } from '@angular/core/testing';

import { ShareService } from './share.service';

describe('ShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareService]
    });
  });

  it('should ...', inject([ShareService], (service: ShareService) => {
    expect(service).toBeTruthy();
  }));
});
