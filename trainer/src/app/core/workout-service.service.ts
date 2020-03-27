import {Injectable} from '@angular/core'; 
import {ExercisePlan} from './model'; 
import {WorkoutPlan} from './model'; 
import {Exercise} from "./model";
import { CoreModule } from './core.module'; 
 
@Injectable({
  providedIn: CoreModule
})
export class WorkoutService { 
    workouts: Array<WorkoutPlan> = []; 
    exercises: Array<Exercise> = []; 
 
    constructor() { 
        this.setupInitialExercises(); 
        this.setupInitialWorkouts(); 
    } 
 
    getExercises(){ 
        return this.exercises; 
    } 
 
    getWorkouts(){ 
        return this.workouts; 
    } 
    setupInitialExercises(){ 
     // implementation of in-memory store. 
    } 
 
    setupInitialWorkouts(){ 
     // implementation of in-memory store. 
    } 
}