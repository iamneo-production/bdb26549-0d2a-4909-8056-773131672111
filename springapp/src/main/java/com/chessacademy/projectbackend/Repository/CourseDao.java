//Data Access Object layer

package com.chessacademy.projectbackend.Repository;

import com.chessacademy.projectbackend.Models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseDao extends JpaRepository<Course,Long> {
}
