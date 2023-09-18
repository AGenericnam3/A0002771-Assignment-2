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
        System.out.println("I have generated a random number between 1 and 10.");
        System.out.println("Can you guess what the number is?");

        do {
            System.out.print("Please enter a guess between 1 and 10: ");
            userGuess = input.nextInt();

            if (userGuess < randomNumber) {
                System.out.println("Too low! Try again.");
            } else if (userGuess > randomNumber) {
                System.out.println("Too high! Try again.");
            }
        } while (userGuess != randomNumber);

        System.out.println("Congratulations! You guessed the correct number: " + randomNumber);
    }
}
