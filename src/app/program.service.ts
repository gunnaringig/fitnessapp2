import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private db: AngularFireDatabase) { }

  //Add product to database
  create(program){
    return this.db.list('/programs').push(program);
  }
}
