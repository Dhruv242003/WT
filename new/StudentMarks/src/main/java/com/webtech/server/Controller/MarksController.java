package com.webtech.server.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.server.Model.Marks;

@CrossOrigin
@RestController
public class MarksController {

    @PostMapping("/calculate")
    public Marks calculatePercentage(@RequestBody Marks marks) {

        marks.setDaapercentage(0.3 * marks.getDaamse() + 0.7 * marks.getDaaese());
        marks.setWtpercentage(0.3 * marks.getWtmse() + 0.7 * marks.getWtese());
        marks.setCnpercentage(0.3 * marks.getCnmse() + 0.7 * marks.getCnese());
        marks.setSmdpercentage(0.3 * marks.getSmdmse() + 0.7 * marks.getSmdese());

        marks.setTotalpercentage(
                (marks.getDaapercentage() + marks.getWtpercentage() +
                        marks.getCnpercentage() + marks.getSmdpercentage()) / 4);

        return marks;
    }
}
