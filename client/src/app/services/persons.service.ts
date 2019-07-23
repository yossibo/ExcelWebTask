import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/Person';


const apiURL: string = "http://localhost:8080/api/persons";

const headers = new HttpHeaders().set("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  refreshEventEmitter: EventEmitter<string> = new EventEmitter();


  addPerson(person: Person): Observable<any> {
    debugger;
    return this.http.post(apiURL,  person, {headers});
  }

  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<Person[]> {
    return <Observable<Person[]>>this.http.get(apiURL);
  }
}
