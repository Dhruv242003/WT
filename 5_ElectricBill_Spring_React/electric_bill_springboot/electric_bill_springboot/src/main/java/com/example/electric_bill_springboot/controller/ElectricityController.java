package com.example.electric_bill_springboot.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.electric_bill_springboot.model.Bill_structure;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "electric_bill_spring")
public class ElectricityController {
    @PostMapping("/calculate")
    public ResponseEntity<Integer> calculateBill(@RequestBody Bill_structure input) throws IOException{
        int units = input.getUnits();
        int rate = input.getRate();

        int bill = units*rate;

        return ResponseEntity.ok(bill);
    }
}
