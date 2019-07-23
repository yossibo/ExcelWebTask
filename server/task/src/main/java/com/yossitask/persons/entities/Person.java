package com.yossitask.persons.entities;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
 
	@Entity
	@EntityListeners(AuditingEntityListener.class)
	public class Person {
	    @Id
	    @GeneratedValue
	    private Long id;
	@NotBlank
	    private String first_name;
	@NotBlank
	    private String last_name;
	
	 @CreatedDate
	    @Column(name = "created_date")
	    private Date createdDate;
	
	


	//CTOR
	 public Person() {
			super(); 
		}
	public Person(@NotBlank String first_name, @NotBlank String last_name) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
	}
	
	
	
	//GETTERS SETTERS
	public Date getCreatedDate() {
		return createdDate; 
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	
	

}


