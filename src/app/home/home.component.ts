import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { ExerciseService } from '../exercise.service';
import { Observable } from 'rxjs';
import { Programs } from '../models/Programs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  programsWithObjectsArray;
  programsWithNamesArray;
  exercises;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(programService: ProgramService, exerciseService: ExerciseService) {
    this.programsWithObjectsArray = programService.get();
    this.exercises = exerciseService.get();

    console.log(this.programsWithObjectsArray);
   }

  ngOnInit() {
    
  }
}
