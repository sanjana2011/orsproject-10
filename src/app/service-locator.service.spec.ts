import { TestBed } from '@angular/core/testing';

import { ServiceLocatorService } from './service-locator.service';

describe('ServicelocatorService', () => {
  let service: ServiceLocatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLocatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
