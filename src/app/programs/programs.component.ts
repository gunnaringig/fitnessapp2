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
export class ProgramComponent implements OnInit {
  programs$;
  programs: Programs[];
  test: [];
  test2: any;

  constructor(private programService: ProgramService, private router: Router) { 
    this.programService.get()
      .subscribe(e => 
        {this.programs$ = e});

    console.log(this.programs$);
  }

  ngOnInit(){
    this.getPrograms();
  }

  //save product with date from template to database 
  save(Programs) {
    this.programService.create(Programs);
  }

  getPrograms(){
    this.programService.getObject().valueChanges().subscribe(e =>
      {
        this.test2 = e;
      })
      console.log(this.test2);
  }

  addExercise(){
    this.router.navigate(['/exercise']);
  }
 
}
