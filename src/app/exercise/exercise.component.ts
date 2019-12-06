import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/program.service';
import { RouterModule, Router } from '@angular/router';
import { Exercises } from 'src/app/models/Exercises';
import {ExerciseService} from 'src/app/exercise.service'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit  {
 
  message: string;
  selected: string;
  name: string;
  program = []; 
  exercises = [];
  userId;

  constructor( private programService: ProgramService,private router: Router, private exerciseService: ExerciseService, private authService: AuthService) { 
    this.authService.user$.subscribe(auth => {
      if(auth) { 
        this.userId = auth.uid;     
        console.log(this.userId)
      }
    });
  


    console.log(this.exercises)
  }

  ngOnInit(): void {
    this.program = this.programService.get();
    this.exercises = this.exerciseService.getByUserId(this.userId);
    }
  //save exercise with date from template to database 
  save(Exercises: Exercises) {
    Exercises.userId = this.userId;
    Exercises.programName = this.selected;
    console.log(Exercises)
    this.exerciseService.create(Exercises);
  }

  onChange(event){
    this.selected = event.target.value;
    console.log(event.target.value);
  }
 
}
