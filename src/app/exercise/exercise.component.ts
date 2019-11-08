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

  constructor( private programService: ProgramService,private router: Router, private exerciseService: ExerciseService) { 
  }

  ngOnInit(){
  }

  //save product with date from template to database 
  save(Exercises) {
    this.programService.create(Exercises);
//    this.router.navigate(['']);
  }
 
}
