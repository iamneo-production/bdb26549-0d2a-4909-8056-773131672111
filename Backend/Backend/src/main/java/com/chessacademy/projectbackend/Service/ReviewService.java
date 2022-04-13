package com.chessacademy.projectbackend.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chessacademy.projectbackend.Models.ReviewModel;
import com.chessacademy.projectbackend.Repository.ReviewRepository;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    public ReviewModel addReview(ReviewModel user){
        return reviewRepository.save(user);
    }
    
    public List<ReviewModel> viewReview(){
        return reviewRepository.findAll();
    }

    public ReviewModel updateReview(String email,ReviewModel user)
    {
        ReviewModel review = reviewRepository.findByEmail(email);
        review.setComment(user.getComment());
        review.setRating(user.getRating());
        return reviewRepository.save(review);
    }

    public ReviewModel deleteReview(String email){
        ReviewModel review=reviewRepository.findByEmail(email);
        reviewRepository.delete(review);
        return review;
    }
}
