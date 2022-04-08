package com.chessacademy.projectbackend.Repository;

import com.chessacademy.projectbackend.Models.StudentModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentModel, Integer> {

    StudentModel findByFirstName(String firstName);

    StudentModel findByStudentId(int studentId);

	Boolean existsByEmail(String email);

	Boolean existsByEmailAndEnrolledCourses_Course_CourseId(String email, long courseID);

	StudentModel findByEmail(String studentId);

	

}
