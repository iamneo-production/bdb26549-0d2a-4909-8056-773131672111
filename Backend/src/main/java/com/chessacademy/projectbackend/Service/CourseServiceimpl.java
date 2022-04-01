package com.chessacademy.projectbackend.Service;

import com.chessacademy.projectbackend.Models.CourseModel;
import com.chessacademy.projectbackend.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import javax.annotation.PostConstruct;

@Service
public class CourseServiceimpl implements CourseServices {

    @Autowired
    private CourseRepository courseDao;

    public CourseServiceimpl() {

    }

    @PostConstruct
    public void initDB() {
        List<CourseModel> courses = IntStream.rangeClosed(1, 50)
                .mapToObj(i -> new CourseModel(i, "Course " + i, "Course " + i, new Random().nextInt(100),
                        new Random().nextInt(500), "5amto6pm"))
                .collect(Collectors.toList());
        courseDao.saveAll(courses);
    }

    @Override
    public List<CourseModel> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public CourseModel getCourse(long courseId) {
        CourseModel entity = courseDao.findById(courseId).orElse(null);
        if (Objects.isNull(entity)) {
            return null;
        } else {
            return courseDao.getById(courseId);
        }
    }

    @Override
    public int findTotalPage(int pageSize) {
        List<CourseModel> courses = courseDao.findAll();
        int recordCount = courses.size();
        int size = recordCount / pageSize + 1;
        return size;
    }

    @Override
    public List<CourseModel> findCoursesWithPagination(int offset, int pageSize) {

        Page<CourseModel> coursespage = courseDao.findAll(PageRequest.of(offset, pageSize));
        List<CourseModel> courses = coursespage.toList();
        // System.out.println(courses);
        return courses;
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

        CourseModel entity = courseDao.findById(parseLong).orElse(null);

        if (Objects.isNull(entity)) {
            return "CourseID not found ";

        } else {
            courseDao.delete(entity);
            return "deleted";
        }

    }
}