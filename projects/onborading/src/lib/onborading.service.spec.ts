import { TestBed } from '@angular/core/testing';

import { OnboradingService } from './onborading.service';

describe('OnboradingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnboradingService = TestBed.get(OnboradingService);
    expect(service).toBeTruthy();
  });
});
