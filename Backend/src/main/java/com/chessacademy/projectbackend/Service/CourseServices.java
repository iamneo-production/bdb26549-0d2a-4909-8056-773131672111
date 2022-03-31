package com.chessacademy.projectbackend.Service;

import java.util.List;
import com.chessacademy.projectbackend.Models.CourseModel;

import org.springframework.data.domain.Page;

public interface CourseServices {
    public List<CourseModel> getCourses();

    public CourseModel getCourse(long courseId);

    public CourseModel addCourse(CourseModel course);

    public CourseModel updateCourse(CourseModel course);

    public String deleteCourse(long parseLong);

    public Page<CourseModel> findCoursesWithPagination(int offset, int pageSize);

}