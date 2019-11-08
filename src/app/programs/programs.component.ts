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
  programs: Programs[];
  programsTest = [];
  currentSelected: string;

  constructor( private programService: ProgramService,private router: Router) { 
    this.programService.get()
    .subscribe( test => {
      this.programsTest = test;
    })
  }


  //save product with date from template to database 
  save(Programs) {
    this.programService.create(Programs);
    this.router.navigate(['']);
  }

  onSelect($event){
    this.programsTest.find(x => x.name === this.currentSelected);
    console.log(this.currentSelected);
  }

  addExercise(){

    this.router.navigate(['/exercise']);
  }
 
}
