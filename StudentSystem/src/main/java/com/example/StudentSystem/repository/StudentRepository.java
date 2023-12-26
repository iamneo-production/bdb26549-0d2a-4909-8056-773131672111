package com.example.StudentSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentSystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String>{

}
