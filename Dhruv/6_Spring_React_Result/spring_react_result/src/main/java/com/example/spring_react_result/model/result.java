package com.example.spring_react_result.model;

public class result {
    private String name;
    private String division;
    private double percentage1;
    private double percentage2;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDivision() {
        return this.division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public double getPercentage1() {
        return this.percentage1;
    }

    public void setPercentage1(double percentage1) {
        this.percentage1 = percentage1;
    }

    public double getPercentage2() {
        return this.percentage2;
    }

    public void setPercentage2(double percentage2) {
        this.percentage2 = percentage2;
    }
}
