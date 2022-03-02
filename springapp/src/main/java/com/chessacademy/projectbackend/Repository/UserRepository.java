package com.chessacademy.projectbackend.Repository;

import java.util.Optional;

import com.chessacademy.projectbackend.Models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByEmail(String email);

  User findByEmailIgnoreCase(String emailId);

  Boolean existsByEmail(String email);
}
