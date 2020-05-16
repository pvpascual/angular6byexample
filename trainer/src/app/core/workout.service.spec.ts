<<<<<<< HEAD
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
=======
import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutService]
    });
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));
>>>>>>> checkpoint5.1
});
