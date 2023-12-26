package com.example.StudentSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {

	public Student() {
		// TODO Auto-generated constructor stub
	}


	public Student(String name, String address, String city, String country, int pinCode, String satScore, String passed) {
		super();
		this.name = name;
		this.address = address;
		this.city = city;
		this.country = country;
		this.pinCode = pinCode;
		this.satScore = satScore;
		this.passed = passed;
	}
	@Id
	String name;
	String address;
	String city;
	String country;
	int pinCode;
	String satScore;
	String passed;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public String getSatScore() {
		return satScore;
	}

	public void setSatScore(String satScore) {
		this.satScore = satScore;
	}

	public String getPassed() {
		return passed;
	}

	public void setPassed(String passed) {
		this.passed = passed;
	}

}
