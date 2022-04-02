package com.chessacademy.projectbackend.Controllers;

import com.chessacademy.projectbackend.Service.StudentService;

import java.util.List;

import com.chessacademy.projectbackend.Models.StudentModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Component
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public StudentModel addStudent(@RequestBody StudentModel user) {

        return studentService.addStudent(user);
    }

    @GetMapping("/viewStudents")
    public List<StudentModel> findAllStudents() {
        return studentService.viewStudent();
    }

    @GetMapping("/viewStudentByName/{StudentFirstName}")
    public StudentModel getStudentByName(@PathVariable String StudentFirstName) {

        return studentService.viewStudentByName(StudentFirstName);
    }

    @GetMapping("/viewStudentById/{StudentId}")
    public StudentModel getStudentById(@PathVariable int StudentId) {

        return studentService.viewStudentById(StudentId);
    }

    @PutMapping("/updateStudent/{studentId}")
    public StudentModel saveOrUpdateStudent(@PathVariable int studentId, @RequestBody StudentModel user) {

        return studentService.updateStudent(studentId, user);
    }

    @DeleteMapping("/deleteStudent/{StudentId}")
    public StudentModel deleteStudent(@PathVariable int StudentId) {
        return studentService.deleteStudent(StudentId);

    }
}
