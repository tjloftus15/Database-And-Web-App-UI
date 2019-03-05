import { TestBed } from '@angular/core/testing';

import { DrinkerServiceService } from './drinker-service.service';

describe('DrinkerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkerServiceService = TestBed.get(DrinkerServiceService);
    expect(service).toBeTruthy();
  });
});
