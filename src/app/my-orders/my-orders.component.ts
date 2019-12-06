import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  userId;
  exercises = [];

  constructor( private authService: AuthService, private exerciseService: ExerciseService) { 
    this.authService.user$.subscribe(auth => {
      if(auth) { 
        this.userId = auth.uid;     
      }
    });
  }

  ngOnInit() {
    this.exercises = this.exerciseService.getByUserId(this.userId);
    console.log(this.exercises)
  }


}
