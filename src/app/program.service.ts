import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Programs } from 'src/app/models/Programs';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { FirebaseDatabase, FirebaseFirestore } from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})


export class ProgramService {
  constructor() {}

  //Add product to database
  create(program: Programs) {

    var dbRef = firebase.firestore();

    return dbRef.collection('programs').add({ program })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  
    //return this.db.list('/programs').push(programs);
  }

 async get() {
  const events = await firebase.firestore().collection('programs')
  var test = [];
  events.get().then((querySnapshot) => {
      const tempDoc = []
      querySnapshot.forEach((doc) => {
         tempDoc.push({ id: doc.id, ...doc.data() })
      })
      test.push(tempDoc)
   })
   console.log(test)
   return test
/*     var dbRef = firebase.firestore();
    let programsArray = [];

    //const snapshot = await dbRef.collection('programs').get()
    //console.log(snapshot.docs.map(document => document.data()));
    //return snapshot.docs.map(document => document.data());

    dbRef.collection('programs').get().then(function(querySnapshot) {
      //console.log(querySnapshot.docs.map(doc => doc.data()));
      //return querySnapshot.docs.map(doc => doc.data());

      querySnapshot.forEach(function(doc) {

      programsArray.push(doc.data());
        //console.log(doc.id, " => ", doc.data());
        //console.log(programsArray);
      });
  });

    console.log(programsArray);
    return programsArray;

    //return this.db.list('/programs').valueChanges(); 
    */
  } 
}
