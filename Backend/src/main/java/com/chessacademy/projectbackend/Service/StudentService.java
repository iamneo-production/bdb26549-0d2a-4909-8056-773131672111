package com.chessacademy.projectbackend.Service;

import java.util.List;

import javax.transaction.Transactional;
import com.chessacademy.projectbackend.Models.StudentModel;

import org.springframework.stereotype.Service;

@Service
public interface StudentService {

    StudentModel addStudent(StudentModel user);

    List<StudentModel> viewStudent();

    @Transactional
    StudentModel viewStudentByName(String studentFirstName);

    StudentModel viewStudentById(int studentId);

    StudentModel updateStudent(int id, StudentModel user);

    StudentModel deleteStudent(int studentId);

}