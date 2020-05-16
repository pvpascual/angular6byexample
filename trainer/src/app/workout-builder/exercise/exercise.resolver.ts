import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Exercise } from '../../core/model';
import { ExerciseBuilderService } from '../builder-services/exercise-builder.service';

@Injectable()
export class ExerciseResolver implements Resolve<Exercise> {
  public exercise: Exercise;

  constructor(
    public exerciseBuilderService: ExerciseBuilderService,
    public router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Exercise {
    let exerciseName = route.paramMap.get('id');

    if (!exerciseName) {
        exerciseName = '';
    }

    this.exercise = this.exerciseBuilderService.startBuilding(exerciseName);

    if (this.exercise) {
        return this.exercise;
<<<<<<< HEAD
    } else { // workoutName not found
=======
    } else { // exerciseName not found
>>>>>>> checkpoint5.1
        this.router.navigate(['/builder/exercises']);
        return null;
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> checkpoint5.1
