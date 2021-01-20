import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }
  username: string;
  password: string;
  ngOnInit() {


  }
  LoginMethod() {
    this.username = "";
    this.password = "";
  }
}
