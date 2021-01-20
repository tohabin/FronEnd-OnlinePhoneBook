import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: User;

  constructor(private httpClient: HttpClient) { }

  public PostUser(aUser: User) {
    return this.httpClient.post('http://localhost:51905/api/user/register', aUser);
  }

}
