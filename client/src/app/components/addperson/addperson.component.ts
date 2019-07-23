import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {

  myPersonForm = new FormGroup({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required)
  })

  isSubmitting:boolean=false;
  constructor(private personService: PersonsService) { }

  ngOnInit() {
  }

  addPerson(): void {
    if (this.myPersonForm.valid) {
      this.isSubmitting=true;
      this.personService.addPerson(this.myPersonForm.value).subscribe(personAdded => {
        this.personService.refreshEventEmitter.emit("PERSON_ADDED");
        this.isSubmitting=false;
      })
    } else {
      alert('please fill in all fields');
    }
  }

}
