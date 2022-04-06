package com.chessacademy.projectbackend.Repository;

import com.chessacademy.projectbackend.Models.StudentModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentModel, Integer> {

    StudentModel findByStudentFirstName(String studentFirstName);

    StudentModel findByStudentId(int studentId);

}