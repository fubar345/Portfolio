package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        //  NAME:  Tyler Dunbar
        //  DATE:  9/9/15
        // Scalable Data Infrastructures
        //  Day 4 Lab
        //  Find and fix the errors

        String myName = "John Doe";
        String myJob = "\"Cat Wrangler\"";
        double myRate = 7.50;
        int numberOfCats = 40;
        boolean employed = true;

        System.out.println("Hello!  My name is " + myName +".");
        System.out.println("I'm a " + myJob + ".");
        System.out.println("My current assignment has me wrangling " + numberOfCats + " cats.");
        System.out.println("So, let's get to work!");

        while (numberOfCats > 0) {

            if (employed = true) {

                System.out.println("I've wrangled another cat.  Only " + numberOfCats + " left!");

            } else {

                System.out.println("I've been fired!  Someone else will have to wrangle the rest!");

            }

            numberOfCats--;


        }

    }
}


