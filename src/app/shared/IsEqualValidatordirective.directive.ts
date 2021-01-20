// import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
// import { Directive, ElementRef, Input } from '@angular/core';


import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appIsEqualValidatordirective]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: IsEqualValidatordirectiveDirective,
      multi: true
    }
  ]

})
export class IsEqualValidatordirectiveDirective implements Validator {


  constructor(@Attribute('appIsEqualValidatordirective') public PasswordControl: string) { }

  validate(c: FormControl) {

    const Password = c.root.get(this.PasswordControl);
    const ConfirmPassword = c;

    if (ConfirmPassword.value === null) {
      return null;
    }

    // this is when 1st confirm password anded then password added
    if (Password) {
      const subscription: Subscription = Password.valueChanges.subscribe(() => {
        ConfirmPassword.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return Password && Password.value !== ConfirmPassword.value ? { passwordMatchError: true } : null;
  }

}



  // @Input() appIsEqualValidatordirective: string;

  // validate(control: AbstractControl): { [key: string]: any } | null {

  //   const controlToCompare = control.parent.get(this.appIsEqualValidatordirective);

  //   console.log("this is my test  " + control.value);
  //   console.log("my password : " + controlToCompare.value);


  //   if (controlToCompare && controlToCompare.value !== control.value) {
  //     return { 'notEqual': true };

  //   }

  //   return null;
  // }







