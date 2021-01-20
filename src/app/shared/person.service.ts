import { Injectable } from "@angular/core";
import { Person } from "./person.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
@Injectable({
  providedIn: "root",
})
export class PersonService {
  formData: Person;
  list: Person[];
  // tslint:disable-next-line: quotemark
  readonly rootURL: "http://localhost:51905/api";


  constructor(private http: HttpClient) {}

  public postPerson(aPerson: Person) {
    aPerson.Id = 0; // not a standard solution. cz it is made by me
    return this.http.post("http://localhost:51905/api/person", aPerson);
  }
  public putPerson(aPerson: Person) {

    return this.http.put("http://localhost:51905/api/person/" + aPerson.Id, aPerson);
  }


  public deletePerson(Id: number) {

    return this.http.delete("http://localhost:51905/api/person/" + Id);
  }


  refreshList() {
    this.http
      .get("http://localhost:51905/api/person")
      .toPromise()
      .then((res) => (this.list = res as Person[]));
  }
}
