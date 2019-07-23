package com.yossitask.persons.services;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; 
import com.yossitask.persons.entities.Person;
import com.yossitask.persons.repositories.PersonsRepository;

import java.util.List;


@Service
public class PersonServiceImpl implements PersonsService {
    @Autowired
    private PersonsRepository personRepository;

	@Override
	public List<Person> listPersons() { 
		  return (List<Person>) personRepository.findAll();
	} 

}
