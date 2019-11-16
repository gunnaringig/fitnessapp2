import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/program.service';
import { RouterModule, Router } from '@angular/router';
import { Programs } from 'src/app/models/Programs';
import { FormBuilder, FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
import { auth } from 'firebase';
import { AuthService } from '../auth.service';
import { Exercises } from '../models/Exercises';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})


export class ProgramComponent  {
  userId;

  constructor(private programService: ProgramService, private router: Router, private authService: AuthService) { 
    this.authService.user$.subscribe(auth => {
      if(auth) { 
        this.userId = auth.uid;     
        console.log(this.userId)
      }
    });
  }

  //save program with data from template to database 
  save(Programs : Exercises) {
    Programs.userId = this.userId;
    console.log(Programs)
    this.programService.create(Programs);
  }


/*   getPrograms(){
    this.programService.getObject().valueChanges().subscribe(e =>
      {
        this.test2 = e;
      })
      console.log(this.test2);
  } */

  addExercise(){
    this.router.navigate(['/exercise']);
  }
 
}
