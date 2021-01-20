import { Person } from "./../../shared/person.model";
import { FormsModule, NgForm } from "@angular/forms";

import { PersonService } from "./../../shared/person.service";
import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"],
})
export class PersonComponent implements OnInit {
  constructor(public formService: PersonService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  public onSubmit(formData: NgForm) {

    if(formData.value.Id == null) {
     this.insert(formData);
    }
    else {
      this.update(formData);
    }


  }

  insert(formData: NgForm) {
    this.formService
      .postPerson(formData.value)
      .subscribe((res) => {this.resetForm(formData);
      this.formService.refreshList();});
  }

  update(formData: NgForm){
    this.formService
      .putPerson(formData.value)
      .subscribe((res) => {this.resetForm(formData);
      this.formService.refreshList();});
  }

  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.formService.formData = {
      Id: null,
      Name: "",
      PhoneNo: "",
      Address: "",
      Email: "",
      FbProfile: "",
      LinkdinProfile: "",
    };
  }
}
