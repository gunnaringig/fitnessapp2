import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Exercises } from 'src/app/models/Exercises';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private db: AngularFireDatabase)
  { }

  create(Exercises, programName){
    //this.db.list('/programs')

    /*
    let db = firebase.firestore();
    let programExercisesRef = db.collection('/programs/exercises')
    .doc(programName)
    .collection('/programs/');
    */

    //return this.db.list('/programs/' + programName + '/exercise').push(Exercises);
  }

  get(){
    return this.db.list('/programs/exercise').valueChanges();
  }
}
