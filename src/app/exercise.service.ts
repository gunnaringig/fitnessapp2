import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Exercises } from 'src/app/models/Exercises';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private db: AngularFireDatabase) 
  { }
  
  //Add product to database
  create(Exercises){
    return this.db.list('/exercise').push(Exercises);
  }
}

