import { Person } from './../../shared/person.model';
import { PersonService } from "./../../shared/person.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"],
})
export class PersonListComponent implements OnInit {
  constructor(public service: PersonService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }


  populateForm(aPerson: Person){
    this.service.formData = Object.assign({}, aPerson);
  }

  deletePerson(id: number){

    if(confirm("Are you sure to delete "+name)) {
      this.service.deletePerson(id).subscribe((res) =>
      this.service.refreshList());
    }


  }

}
