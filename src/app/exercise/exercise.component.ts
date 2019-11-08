import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/program.service';
import { RouterModule, Router } from '@angular/router';
import { Exercises } from 'src/app/models/Exercises';
import {ExerciseService} from 'src/app/exercise.service'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  programs$;
  message: string;
  selected: string;

  constructor(private programService: ProgramService, private router: Router, private exerciseService: ExerciseService) { 
    this.programs$ = programService.get();
  }


  //save exercise with date from template to database 
  save(Exercises, name) {
    name = this.selected;
    this.exerciseService.create(Exercises, name);
  }

  onChange(e){
    this.selected = e;
    console.log(this.selected);
  }
}
