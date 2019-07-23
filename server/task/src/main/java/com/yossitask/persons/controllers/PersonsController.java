package com.yossitask.persons.controllers;
import org.springframework.web.bind.annotation.RestController;

import com.yossitask.persons.entities.Person;
import com.yossitask.persons.repositories.PersonsRepository;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


 
@RestController
@RequestMapping("/api")
public class PersonsController {
	 
	@Autowired
		PersonsRepository personsRepository;
	 

	//Get All Persons
        @CrossOrigin(origins = "http://localhost:4200")
	    @GetMapping("/persons")
	    public List<Person> getAllPersons() {
	        return personsRepository.findAll();
	    }

	// Create a new Person
        @CrossOrigin(origins = "http://localhost:4200")
	    @PostMapping("/persons") 
	    public Person createPerson(@Valid  @RequestBody Person person) {
	        return personsRepository.save(person);
	    }
	     
	 
}




 