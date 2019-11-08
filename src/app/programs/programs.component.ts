import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/program.service';
import { RouterModule, Router } from '@angular/router';
import { Programs } from 'src/app/models/programs';
import { FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramComponent  {
  programs$

  constructor(private programService: ProgramService, private router: Router) { 
    this.programs$ = programService.get();
  }

  //save product with date from template to database 
  save(Programs) {
    this.programService.create(Programs);
  }

  addExercise(){

    this.router.navigate(['/exercise']);
  }
 
}
