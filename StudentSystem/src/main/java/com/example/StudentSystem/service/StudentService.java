package com.example.StudentSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentSystem.model.Student;
import com.example.StudentSystem.repository.StudentRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentService {

	private final StudentRepository satScoreRepository;

	private final Student st;

	@Autowired
	public StudentService(StudentRepository studentRepository) {
		this.satScoreRepository = studentRepository;
		this.st = new Student();
	}

	public void insertSatScore(Student satScore) {
		// Implement the logic to save the satScore to the database
		satScoreRepository.save(satScore);
	}

	public List<Student> getAllSatScores() {
		// Implement the logic to retrieve all satScores from the database
		return satScoreRepository.findAll();
	}

	public boolean doesNameExist(String name) {
		// TODO Auto-generated method stub

		if (!satScoreRepository.existsById(name))
			return true;

		else
			return false;
	}

	public Student getUserDataByName(String name) {
		return satScoreRepository.findById(name).orElse(null);

	}

	public void updateSatScore(String name, String satScore) throws JsonMappingException, JsonProcessingException {
		Optional<Student> optionalSatScore = satScoreRepository.findById(name);
		if (optionalSatScore.isPresent()) {
			Student existingSatScore = optionalSatScore.get();
			ObjectMapper ob= new ObjectMapper();
			
			Student student=ob.readValue(satScore,Student.class);

			existingSatScore.setAddress(student.getAddress());
			existingSatScore.setCity(student.getCity());
			existingSatScore.setCountry(student.getCountry());
			existingSatScore.setPinCode(student.getPinCode());
			existingSatScore.setSatScore(student.getSatScore());
			satScoreRepository.save(existingSatScore);

			//System.out.println(existingSatScore);
		}
	}
	
	public void deleteStudent(String name) {
		// Implement the logic to retrieve all satScores from the database
		satScoreRepository.deleteById(name);
	}
}
