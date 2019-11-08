import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  //Sort list form database by 'name' tag
  // getCategories() {
  //   return this.db.list('/categories').valueChanges();
  // }

  getCategories() {
    return this.db.list('/categories', ref => {
      return ref.orderByChild('name');
    }).valueChanges();
  }
}
