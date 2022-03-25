package com.chessacademy.projectbackend.Service;

import com.chessacademy.projectbackend.Models.Course;
import com.chessacademy.projectbackend.Repository.CourseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CourseServiceimpl implements CourseServices{

    @Autowired
    private CourseDao courseDao;

    //List<Course> list;

    public CourseServiceimpl(){


//        list=new ArrayList<>();
//        list.add(new Course(150, "Java", "This is a java course", 50));
//        list.add(new Course(140, "SpringBoot", "This is a SpringBoot course", 60));

    }


    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {

//        Course c = null;
//        for(Course course:list){
//            if(course.getCourseId()==courseId){
//                c = course;
//                break;
//            }
//        }
        Course entity=courseDao.findById(courseId).orElse(null);
        if(Objects.isNull(entity)){
            return null;
        }
        else{
            return courseDao.getById(courseId);
        }
        //return courseDao.getById(courseId);
    }

    @Override
    public Course addCourse(Course course) {

        //list.add(course);

        courseDao.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
//        list.forEach(e->{
//            if(e.getCourseId()==course.getCourseId()){
//                e.setCourseName(course.getCourseName());
//                e.setCourseDescription(course.getCourseDescription());
//                e.setCourseDuration(course.getCourseDuration());
//            }
//        });
        courseDao.save(course);
        return course;
    }

    @Override
    public String deleteCourse(long parseLong) {
        //list=this.list.stream().filter(e->e.getCourseId()!=parseLong).collect(Collectors.toList());
        //Course entity=courseDao.getById(parseLong);
        Course entity=courseDao.findById(parseLong).orElse(null);

        if(Objects.isNull(entity)){
            return "CourseID not found ";

        }else{
            courseDao.delete(entity);
            return "deleted";
        }

    }
}
