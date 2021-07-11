
// to print substring after a paticular
import java.util.Scanner;

public class assignment03 {
    public static void main(String[] args) {
        // making scanner object
        Scanner stringInput = new Scanner(System.in);
        String str = "";

        if (str.isEmpty()) {
            System.out.println("Enter a string");
            // string input
            str = stringInput.nextLine();
            int strLength = str.length();
            System.out.println("Enter a character");

            // Character input
            char c = stringInput.next().charAt(0);

            // index
            int charIndex = str.indexOf(c);
            System.out.println(str.substring(charIndex + 1, strLength));
            stringInput.close();
        }

    }

}