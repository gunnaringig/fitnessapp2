import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { ExerciseService } from '../exercise.service';
import { Observable } from 'rxjs';
import { Programs } from '../models/Programs';
import { resolve } from 'url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  programsWithObjectsArray;
  programs$;
  program = {}; 
  exercises;

  constructor(private programService: ProgramService, exerciseService: ExerciseService) {
    this.program = this.programService.get();
    console.log(this.program)
   }

  ngOnInit() {
    
  }
}
