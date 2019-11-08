import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) { 
  }

  login() {
    this.auth.login();
  }

  loginEmail(){
    //implement because poul the man needs to test
    //And also tilføj to firebase
    //could be just a new page, could also be a modal
    // I added a modal just to show how it could look, 
    //uses forms so should be easy enough to implement with firebase
  }
}
