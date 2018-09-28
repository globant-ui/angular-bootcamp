import { TestBed, inject } from '@angular/core/testing';

import { MarsPhotosService } from './mars-photos.service';

describe('MarsPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsPhotosService]
    });
  });

  it('should be created', inject([MarsPhotosService], (service: MarsPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
