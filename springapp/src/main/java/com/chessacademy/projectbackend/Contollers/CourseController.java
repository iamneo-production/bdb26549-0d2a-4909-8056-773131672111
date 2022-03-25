package com.chessacademy.projectbackend.Contollers;

//import java.util.List;

import com.chessacademy.projectbackend.Service.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.chessacademy.projectbackend.Models.Course;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")

public class CourseController {


    @Autowired
    private CourseServices courseService;

    // get and view all the courses

    @GetMapping("/admin/viewCourse")
    public ResponseEntity<?> getCourses(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(this.courseService.getCourses());
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // get and view a single course with its id

    @GetMapping("/admin/viewCourse/{courseId}")
    public ResponseEntity<?> getCourse(@PathVariable String courseId){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(this.courseService.getCourse(Long.parseLong(courseId)));
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //add a course
    @PostMapping("/admin/addCourse")
    public ResponseEntity<?> addCourse(@RequestBody Course course){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(this.courseService.addCourse(course));
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //edit a course
    @PutMapping("/admin/editCourse")
    public ResponseEntity<?> updateCourse(@RequestBody Course course){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(this.courseService.updateCourse(course));
        }catch(Exception e){
            return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //delete a course
    @DeleteMapping("/admin/deleteCourse/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable String courseId){
        try{
            return  ResponseEntity.status(HttpStatus.OK).body(this.courseService.deleteCourse(Long.parseLong(courseId)));
        }catch(Exception e){
            //return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("INTERNAL_SERVER_ERROR");
            return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
