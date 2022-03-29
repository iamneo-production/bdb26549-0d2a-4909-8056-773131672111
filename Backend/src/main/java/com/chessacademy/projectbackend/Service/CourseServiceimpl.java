package com.chessacademy.projectbackend.Service;

import com.chessacademy.projectbackend.Models.CourseModel;
import com.chessacademy.projectbackend.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CourseServiceimpl implements CourseServices{

    @Autowired
    private CourseRepository courseDao;

    public CourseServiceimpl(){

    }


    @Override
    public List<CourseModel> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public CourseModel getCourse(long courseId) {
        CourseModel entity=courseDao.findById(courseId).orElse(null);
        if(Objects.isNull(entity)){
            return null;
        }
        else{
            return courseDao.getById(courseId);
        }
    }

    @Override
    public CourseModel addCourse(CourseModel course) {

        courseDao.save(course);
        return course;
    }

    @Override
    public CourseModel updateCourse(CourseModel course) {

        courseDao.save(course);
        return course;
    }

    @Override
    public String deleteCourse(long parseLong) {

        CourseModel entity=courseDao.findById(parseLong).orElse(null);

        if(Objects.isNull(entity)){
            return "CourseID not found ";

        }else{
            courseDao.delete(entity);
            return "deleted";
        }

    }
}