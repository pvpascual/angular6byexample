<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';
=======
import { TestBed, inject } from '@angular/core/testing';
>>>>>>> checkpoint5.1

import { ExerciseBuilderService } from './exercise-builder.service';

describe('ExerciseBuilderService', () => {
<<<<<<< HEAD
  let service: ExerciseBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseBuilderService]
    });
  });

  it('should be created', inject([ExerciseBuilderService], (service: ExerciseBuilderService) => {
    expect(service).toBeTruthy();
  }));
>>>>>>> checkpoint5.1
});
