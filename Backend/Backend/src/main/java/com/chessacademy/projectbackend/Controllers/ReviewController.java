package com.chessacademy.projectbackend.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chessacademy.projectbackend.Models.ReviewModel;
import com.chessacademy.projectbackend.Service.ReviewService;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/addReview")
    public ReviewModel saveReview(@RequestBody ReviewModel user) {
        return reviewService.addReview(user);

    }

    @GetMapping("/viewReview")
    public List<ReviewModel> findAllReview(){
        return reviewService.viewReview();
        
    }


    @PutMapping("/updateReview/{email}")
    public ReviewModel editReview(@PathVariable String email,@RequestBody ReviewModel user){
        return reviewService.updateReview(email,user);
    }

    @DeleteMapping("/deleteReview/{email}")
    public ReviewModel deleteReview(@PathVariable String email){
        return reviewService.deleteReview(email);
    }

}
