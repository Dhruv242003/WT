package com.book.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}