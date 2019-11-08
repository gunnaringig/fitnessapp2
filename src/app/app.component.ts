import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { auth } from 'firebase';
import { Routes, Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  //Set returnUrl local, because login provoider doesn't let us pass that
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        //should be on a seperate register and only be called once.
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    })
  }


  ngOnDestroy(): void {
    this.auth.user$.subscribe().unsubscribe();
  }
}
