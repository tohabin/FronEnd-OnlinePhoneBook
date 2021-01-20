import { SignInComponent } from './User/SignIn/SignIn.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './persons/person/person.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonService } from './shared/person.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './User/User.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { IsEqualValidatordirectiveDirective } from './shared/IsEqualValidatordirective.directive';




@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonComponent,
    PersonListComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    IsEqualValidatordirectiveDirective

  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
