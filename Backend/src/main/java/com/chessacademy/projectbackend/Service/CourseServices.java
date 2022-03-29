package com.chessacademy.projectbackend.Service;

import java.util.List;
import com.chessacademy.projectbackend.Models.CourseModel;
public interface CourseServices {
    public List<CourseModel> getCourses();

    public CourseModel getCourse(long courseId);

    public CourseModel addCourse(CourseModel course);

    public CourseModel updateCourse(CourseModel course);

    public String deleteCourse(long parseLong);

}