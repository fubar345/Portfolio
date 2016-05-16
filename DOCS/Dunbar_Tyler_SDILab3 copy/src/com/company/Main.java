package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        //create variables here

        String wolf = "The wolf likes to eat ";
        boolean food = true;
        int numberFood = 10;

        //outputs of variables

        System.out.println(wolf + "rabbits the most.");
        System.out.println("It is " + food + " that the wolf likes to eat itself.");
        System.out.println(wolf + numberFood + " whole rabbits everyday.");

        //create scanner

        Scanner scan = new Scanner(System.in);
        System.out.println("Is it true or false that the wolf likes to eat itself?");
        food = scan.nextBoolean();

        if(!food){
            System.out.println("Nice work! The wolf does not like to eat itself.");
        }else{
            System.out.println("Are you sure? Might want to try again.");
        }
        System.out.println("Now how many whole rabbits do you think the wolf can eat?");
        numberFood = scan.nextInt();
        if(numberFood>=(10)){
            System.out.println("You hit it right on the nose! The wolf wont be going hungry tonight!");
        }else{
            System.out.println("Oh no! Looks like The wolf will be hungry this evening.");
        }
            System.out.println("The wolf likes to eat many things. But what does it like to eat the most? ");
            wolf = scan.next();
            if(wolf.equals("rabbits")){
                System.out.println("Rabbits are indeed The wolf's favorite meal!");
            }else{
                System.out.println("While The wolf does love to eat that as well , it is not its favorite.");
            }

    }
}
