import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person:Person;

  constructor() { }

  ngOnInit() { 
  }

}
