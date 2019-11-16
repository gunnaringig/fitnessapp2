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

  create(Exercises){
    //this.db.list('/programs')

  
/*     let db = firebase.firestore();
    let programExercisesRef = db.collection('programs')
    .doc(programName);
    programExercisesRef.update; */

    let db = firebase.firestore();
    //
    
    const dbRef = db.collection('exercise').add(Exercises);
    


    //return this.db.list('/programs/' + programName + '/exercise').push(Exercises);
  }

  get() {
    /*   const events = await firebase.firestore().collection('programs')
      var test = [];
      events.get().then((querySnapshot) => {
          const tempDoc = []
          querySnapshot.forEach((doc) => {
             tempDoc.push({ id: doc.id, ...doc.data() })
          })
          test.push(tempDoc)
       })
       console.log(test)
       return test */
        var dbRef = firebase.firestore();
        let programsArray = [];
    
        //const snapshot = await dbRef.collection('programs').get()
        //console.log(snapshot.docs.map(document => document.data()));
        //return snapshot.docs.map(document => document.data());
    
        dbRef.collection('exercise').get().then(function(querySnapshot) {
          //console.log(querySnapshot.docs.map(doc => doc.data()));
          //return querySnapshot.docs.map(doc => doc.data());
    
          querySnapshot.forEach(function(doc) {
    
          programsArray.push({id: doc.id, ...doc.data()});
            //console.log(doc.id, " => ", doc.data());
            //console.log(programsArray);
          });
      });
    
        console.log(programsArray);
        return programsArray;
    
        //return this.db.list('/programs').valueChanges(); 
      } 

      getByUserId(userId: string){
        var dbRef = firebase.firestore();
        let programsArray = [];

        dbRef.collection('exercise').where('userId', '==', userId).get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
          programsArray.push({id: doc.id, ...doc.data()});
          });
        });

        return programsArray;
        
      }
}
