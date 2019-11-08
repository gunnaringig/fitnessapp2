import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Exercises } from 'src/app/models/Exercises';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private db: AngularFireDatabase) { 

  }
  
//  Add product to database

  // create(Exercises){
  //   var pushRef = this.db.list('/programs/').push(Exercises);
  //   var id = pushRef.key;
  //   console.log(pushRef.key.toString());
  //   return;
  // }


  create(Exercises, programName){

    //this.db.list('/programs')

    return this.db.list('/programs/' + programName + '/exercise').push(Exercises);
  }

  get(){
    return this.db.list('/programs/exercise').valueChanges();
  }
}

