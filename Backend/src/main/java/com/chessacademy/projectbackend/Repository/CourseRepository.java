//Data Access Object layer

package com.chessacademy.projectbackend.Repository;

import com.chessacademy.projectbackend.Models.CourseModel;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository<CourseModel,Long> {
}
