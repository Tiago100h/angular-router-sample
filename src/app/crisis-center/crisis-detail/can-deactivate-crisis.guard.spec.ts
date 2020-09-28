import { TestBed } from '@angular/core/testing';

import { CanDeactivateCrisisGuard } from './can-deactivate-crisis.guard';

describe('CanDeactivateCrisisGuard', () => {
  let guard: CanDeactivateCrisisGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateCrisisGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
