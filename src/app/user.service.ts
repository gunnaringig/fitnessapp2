import { Injectable } from '@angular/core';
import { AppUser } from './models/app-user'
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  //save user in firebase database
  save(user: firebase.User) {
      this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
      });
  }

  //Read user from database
  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
}
