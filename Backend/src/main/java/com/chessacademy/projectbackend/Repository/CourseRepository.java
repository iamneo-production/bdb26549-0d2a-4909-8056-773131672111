//Data Access Object layer

package com.chessacademy.projectbackend.Repository;

import com.chessacademy.projectbackend.Models.CourseModel;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CourseRepository extends JpaRepository<CourseModel,Long> {

	CourseModel findByCourseName(String courseName);
}