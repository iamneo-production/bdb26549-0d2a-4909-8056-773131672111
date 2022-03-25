package com.chessacademy.projectbackend.Service;

import java.security.PublicKey;
import java.util.List;
import com.chessacademy.projectbackend.Models.Course;
public interface CourseServices {
    public List<Course> getCourses();

    public Course getCourse(long courseId);

    public Course addCourse(Course course);

    public Course updateCourse(Course course);

    public String deleteCourse(long parseLong);

}
