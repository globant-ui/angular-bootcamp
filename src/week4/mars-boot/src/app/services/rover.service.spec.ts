import { TestBed } from '@angular/core/testing';

import { RoverService } from './rover.service';

describe('RoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoverService = TestBed.get(RoverService);
    expect(service).toBeTruthy();
  });
});
