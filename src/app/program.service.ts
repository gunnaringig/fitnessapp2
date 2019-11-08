import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Programs } from 'src/app/models/programs';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private db: AngularFireDatabase) { }


  //Add product to database
  create(Programs){
    return this.db.list('/programs').push(Programs);
  }

  get(){
    return this.db.list('/programs').valueChanges();
  }
}
