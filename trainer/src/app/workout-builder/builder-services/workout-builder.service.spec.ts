<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';
=======
import { TestBed, inject } from '@angular/core/testing';
>>>>>>> checkpoint5.1

import { WorkoutBuilderService } from './workout-builder.service';

describe('WorkoutBuilderService', () => {
<<<<<<< HEAD
  let service: WorkoutBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutBuilderService]
    });
  });

  it('should be created', inject([WorkoutBuilderService], (service: WorkoutBuilderService) => {
    expect(service).toBeTruthy();
  }));
>>>>>>> checkpoint5.1
});
