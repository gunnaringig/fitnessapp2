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
export class ExerciseComponent  {
  message: string;
  selected: string;
  name: string;
  program = []; 
  constructor( private programService: ProgramService,private router: Router, private exerciseService: ExerciseService) { 
    this.program = this.programService.get();
    console.log(this.program)
  }


  //save exercise with date from template to database 
  save(Exercises, name) {
    name = this.selected;
    this.exerciseService.create(Exercises, name);
  }

  onChange(event){
    this.selected = event.target.value;
    console.log(event.target.value);
  }
 
}
