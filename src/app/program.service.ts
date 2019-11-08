import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Programs } from 'src/app/models/Programs';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private db: AngularFireDatabase) { }


  //Add product to database
  create(programs: Programs){
    return this.db.list('/programs').push(programs);
  }

  get(){
     return this.db.list('/programs').valueChanges();

  }
}
