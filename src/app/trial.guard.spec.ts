import { TestBed, async, inject } from '@angular/core/testing';

import { TrialGuard } from './trial.guard';

describe('TrialGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrialGuard]
    });
  });

  it('should ...', inject([TrialGuard], (guard: TrialGuard) => {
    expect(guard).toBeTruthy();
  }));
});
