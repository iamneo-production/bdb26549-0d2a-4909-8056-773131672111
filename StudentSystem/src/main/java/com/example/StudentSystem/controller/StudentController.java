package com.example.StudentSystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentSystem.model.Student;
import com.example.StudentSystem.repository.StudentRepository;
import com.example.StudentSystem.service.StudentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@RestController
@RequestMapping("/api/sat-scores")
@CrossOrigin("*")
public class StudentController {


 private final StudentService satScoreService;
 
 private final StudentRepository studentRepository;

 @Autowired
 public StudentController(StudentService satScoreService,StudentRepository studentRepository) {
     this.satScoreService = satScoreService;
	this.studentRepository = studentRepository;
 }

 @PostMapping("/insert")
 public ResponseEntity<Void> insertSatScore(@RequestBody Student satScore) {
     satScoreService.insertSatScore(satScore);
     return ResponseEntity.ok().build();
 }
@GetMapping("/view-all")
 public ResponseEntity<List<Student>> viewAllSatScores() {
     List<Student> satScores = satScoreService.getAllSatScores();
     return ResponseEntity.ok(satScores);
 }

@GetMapping("/check-name/{name}")
public ResponseEntity<Map<String, Boolean>> checkNameAvailability(@PathVariable String name) {
    boolean isAvailable = !satScoreService.doesNameExist(name);
    Map<String, Boolean> response = new HashMap<>();
    response.put("available", isAvailable);
    return ResponseEntity.ok(response);
    }

@GetMapping("/get-user-data/{name}")
public ResponseEntity<Student> getUserDataByName(@PathVariable String name) {
    Student userData = satScoreService.getUserDataByName(name);
    return ResponseEntity.ok(userData);
}


@PutMapping("/update-sat-score/{name}")
public ResponseEntity<Void> updateSatScore(@PathVariable String name, @RequestBody String satScore) throws JsonMappingException, JsonProcessingException {
    satScoreService.updateSatScore(name, satScore);
    return ResponseEntity.ok().build();
    
}

@DeleteMapping("/delete/{name}")
String deleteStudent(@PathVariable String name) throws Exception {
	
	if(!studentRepository.existsById(name))
		throw new Exception(name);
	
	satScoreService.deleteStudent(name);
	return "Student data with name "+name+" has been deleted.";
}
 
}
