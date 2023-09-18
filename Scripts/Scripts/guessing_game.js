//Guessing Game
import java.util.Scanner;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Random random = new Random();
        int randomNumber = random.nextInt(10) + 1;
        int userGuess;

        System.out.println("Welcome to my Random Number Game!");
        System.out.println("A random number between 1 and 10 has been generated.");
        System.out.println("Can you guess what that number is?");

        do {
            System.out.print("Please enter a number between 1 and 10: ");
            userGuess = input.nextInt();

            if (userGuess < randomNumber) {
                System.out.println( userGuess + " is too low! Try again.");
            } else if (userGuess > randomNumber) {
                System.out.println( userGuess + " is too high! Try again.");
            }
        } while (userGuess != randomNumber);

        System.out.println("Congratulations! You guessed the correct number: " + randomNumber);
    }
}
