package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // Tyler dunbar
        //SDI 1509
        // Day Two Variables and Outputs

        //Define variables here
        String myHomeAddress ="259 S Miami";
        String myFavoriteStore ="\"Publix\" Supermarkets";
        double milesToStore = 6.5;
        boolean construction = true;

        //Outputs
        System.out.println("I live at " + myHomeAddress + ".");
        System.out.println("I shop at " + myFavoriteStore + ".");
        System.out.println("It is " + milesToStore + " miles to the store.");
        System.out.println("It is " + construction + " that there is construction.");

        Scanner scan = new Scanner(System.in);

        System.out.print("Is it true or false that there is construction? ");
        construction = scan.nextBoolean();

        System.out.println("Now it is " + construction + " that there is construction. ");

        System.out.print("Where do you want to shop? ");
        myFavoriteStore = scan.next();

        System.out.println("Let's go to " + myFavoriteStore + ".");




    }
}
