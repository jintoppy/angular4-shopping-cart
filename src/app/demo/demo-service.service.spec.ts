import { TestBed, inject } from '@angular/core/testing';

import { DemoServiceService } from './demo-service.service';

describe('DemoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoServiceService]
    });
  });

  it('should ...', inject([DemoServiceService], (service: DemoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
