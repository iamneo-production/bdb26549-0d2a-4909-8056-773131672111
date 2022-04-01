package com.chessacademy.projectbackend.Models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {

    @Id
    private Long courseId;
    private String courseName;
    private String courseDescription;
    private int courseDuration;
    private int noOfStudents;
    private String courseTiming;

    //constructor

    public Course(long courseId, String courseName, String courseDescription, int courseDuration, int noOfStudents , String courseTiming) {
        super();
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseDuration = courseDuration;
        this.noOfStudents = noOfStudents;
        this.courseTiming = courseTiming;
    }

    //default constructor

    public Course() {
        super();
        //default
    }


    //getter and setter 

    public long getCourseId() {
        return courseId;
    }

    public void setCourseId(long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public int getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(int courseDuration) {
        this.courseDuration = courseDuration;
    }

    public int getNoOfStudents() {
        return noOfStudents;
    }

    public void setNoOfStudents(int noOfStudents) {
        this.noOfStudents = noOfStudents;
    }

    public String getCourseTiming() {
        return courseTiming;
    }

    public void setCourseTiming(String courseTiming) {
        this.courseTiming = courseTiming;
    }

    //toString meathod

    @Override
    public String toString() {
        
        return "Course{" +
                "courseId=" + courseId +
                ", courseName='" + courseName + '\'' +
                ", courseDescription='" + courseDescription + '\'' +
                ", courseDuration=" + courseDuration +
                ", noOfStudents=" + noOfStudents +
                ", courseName='" + courseName + '\'' +
                '}';
    }
}
