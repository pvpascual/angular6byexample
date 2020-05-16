import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { SharedModule } from './shared/shared.module';
import { WorkoutBuilderModule } from './workout-builder/workout-builder.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FinishComponent,
    WorkoutHistoryComponent
  ],
  imports: [
    BrowserModule,
    WorkoutRunnerModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
     FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
