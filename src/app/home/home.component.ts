import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  exercises$
  programs$

  constructor(private exerciseService: ExerciseService, private programService: ProgramService) {
    this.exercises$ = exerciseService.get();
    this.programs$ = programService.get();
  }
  
}
