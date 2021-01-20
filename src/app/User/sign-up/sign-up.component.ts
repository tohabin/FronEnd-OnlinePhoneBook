import { UserService } from './../../shared/user.service';
import { User } from './../../shared/user.model';
import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
// import { IsEqualValidatordirectiveDirective } from "./../../shared/IsEqualValidatordirective.directive";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  showMsg: boolean;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.resetForm();
    this.showMsg = false;
  }
  SignUpMethod(form: NgForm) {
    this.registerUser(form);
  }


  public registerUser(form: NgForm) {
    this.userService.PostUser(form.value)
      .subscribe((res) => { this.resetForm(form); this.showMsg = true; });
  }

  /* Reseting the value of form template reference variable
   and also clearing service formdata_object */
  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.userService.formData = {
      UserName: '',
      Password: '',
      ConfirmPassword: '',
      Email: ''
    };
  }
}
