package com.chessacademy.projectbackend.Payload.Response;

import java.util.List;

import com.chessacademy.projectbackend.Models.CourseModel;
import com.chessacademy.projectbackend.Models.StudentModel;

public class ViewResponse {
    public List<CourseModel> courses;
    public int count;

    public ViewResponse(List<CourseModel> courses, int count) {
        this.courses = courses;
        this.count = count;
    }
   

}