import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-allpersons',
  templateUrl: './allpersons.component.html',
  styleUrls: ['./allpersons.component.css']
})
export class AllpersonsComponent implements OnInit {

  allPersons: Person[] = [];

  constructor(private personService: PersonsService) { }

  ngOnInit() {
    this.fetchPersonsFromServer();
    //listen to data changes
    this.personService.refreshEventEmitter.subscribe(msg => {
      if (msg == "PERSON_ADDED") {
        this.fetchPersonsFromServer();
      }
    }) ;
  }

  fetchPersonsFromServer() {
    this.personService.getAllPersons().subscribe(personData => { 
      this.allPersons = personData; 
    });
  }

}
