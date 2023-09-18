//Password Validator
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String password;
        boolean isMatched = false;

        do {
            System.out.print("Please set your password: ");
            password = scanner.nextLine();

            System.out.print("Please confirm your password: ");
            String confirmPassword = scanner.nextLine();

            if (password.equals(confirmPassword)) {
                isMatched = true;
                System.out.println("Password set successfully!");
            } else {
                System.out.println("Your passwords do not match. Please try again.");
            }
        } while (!isMatched);
    }
}
