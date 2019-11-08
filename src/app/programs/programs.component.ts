import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProgramService } from 'src/app/program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramComponent  {
  categories$;

  constructor(categoryService: CategoryService, private programService: ProgramService) { 
    this.categories$ = categoryService.getCategories();
  }

  //save product with date from template to database 
  save(program) {
    this.programService.create(program);
  }
 
}
