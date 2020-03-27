import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutPlan } from '../../core/model';
import {WorkoutService} from '../../core/workout-service.service'

@Component({
  selector: 'abe-workouts',
  templateUrl: './workouts.component.html',
  styles: []
})
export class WorkoutsComponent implements OnInit { 
  workoutList:Array<WorkoutPlan> = []; 

  constructor( 
      public router:Router, 
      public workoutService:WorkoutService) {} 

  ngOnInit() { 
      this.workoutList = this.workoutService.getWorkouts(); 
  } 

  onSelect(workout: WorkoutPlan) { 
      this.router.navigate( ['./builder/workout', workout.name] ); 
  } 
} 
