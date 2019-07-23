package com.yossitask.persons.repositories;  
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yossitask.persons.entities.Person;

public interface PersonsRepository extends JpaRepository<Person, Long> {
}