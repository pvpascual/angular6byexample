import { TestBed } from '@angular/core/testing';

import { WorkoutService } from './workout.service';

describe('WorkoutServiceService', () => {
  let service: WorkoutServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
