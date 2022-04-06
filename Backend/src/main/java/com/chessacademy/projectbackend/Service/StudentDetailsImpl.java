package com.chessacademy.projectbackend.Service;

import java.util.List;
import com.chessacademy.projectbackend.Models.StudentModel;
import com.chessacademy.projectbackend.Repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentDetailsImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Override
    public StudentModel addStudent(StudentModel user) {
        return studentRepository.save(user);
    }

    @Override
    public List<StudentModel> viewStudent() {
        return studentRepository.findAll();
    }

    @Override
    public StudentModel viewStudentByName(String studentFirstName) {
        return studentRepository.findByStudentFirstName(studentFirstName);
    }

    @Override
    public StudentModel viewStudentById(int studentId) {
        return studentRepository.findByStudentId(studentId);
    }

    @Override
    public StudentModel updateStudent(int id, StudentModel user) {
        StudentModel student = studentRepository.findByStudentId(id);
        student.setStudentFirstName(user.getStudentFirstName());
        student.setStudentLastName(user.getStudentLastName());
        student.setStudentGender(user.getStudentGender());
        student.setStudentFatherName(user.getStudentFatherName());
        student.setStudentMotherName(user.getStudentMotherName());
        student.setStudentemailId(user.getStudentemailId());
        student.setStudentDob(user.getStudentDob());
        student.setStudentMobileNumber(user.getStudentMobileNumber());
        student.setStudentAlternateNumber(user.getStudentAlternateNumber());
        student.setStudentCourseId(user.getStudentCourseId());
        student.setStudentAddressLine1(user.getStudentAddressLine1());
        student.setStudentAddressLine2(user.getStudentAddressLine2());
        student.setStudentCity(user.getStudentCity());
        student.setStudentState(user.getStudentState());
        student.setStudentPincode(user.getStudentPincode());
        student.setStudentNationality(user.getStudentNationality());
        return studentRepository.save(student);
    }

    @Override
    public StudentModel deleteStudent(int studentId) {

        StudentModel student = studentRepository.findByStudentId(studentId);
        studentRepository.delete(student);
        return student;
    }

}