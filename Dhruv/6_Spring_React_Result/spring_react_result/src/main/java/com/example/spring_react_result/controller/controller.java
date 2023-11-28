package com.example.spring_react_result.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring_react_result.model.result;
import com.example.spring_react_result.model.resultRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "result")
public class controller{
    @PostMapping("/getResult")
    public result getResult(@RequestBody resultRequest request){

        result result = new result();

        result.setName(request.getName());
        result.setDivision(request.getDivision());
        result.setPercentage1((double)request.getMarks1());
        result.setPercentage2((double)request.getMarks2());

        return result;
    }
}
