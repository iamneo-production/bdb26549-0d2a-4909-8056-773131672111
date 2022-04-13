package com.chessacademy.projectbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chessacademy.projectbackend.Models.ReviewModel;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewModel,Long>  {
    ReviewModel findByEmail(String email);

    
}

