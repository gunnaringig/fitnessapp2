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

  
/*     let db = firebase.firestore();
    let programExercisesRef = db.collection('programs')
    .doc(programName);
    programExercisesRef.update; */

    let db = firebase.firestore();
    const dbRef = db.collection('programs').doc(programName).collection('exercise').add(Exercises);
    


    //return this.db.list('/programs/' + programName + '/exercise').push(Exercises);
  }

  get(){
    const getter = this.db.list('/programs/exercise').valueChanges();
    return getter;
    
  }
}
