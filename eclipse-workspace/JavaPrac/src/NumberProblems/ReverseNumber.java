package NumberProblems;

import java.util.Scanner;

public class ReverseNumber {
	public static void main (String[]args)
    {

        //variables initialization
        int num, reverse = 0, rem;
        Scanner sc = new Scanner(System.in);
		System.out.print("Enter number: ");
		num = sc.nextInt();

        //loop to find reverse number
        while(num != 0)
        {
            rem = num % 10;
            //Shifts the digits in reverse left and adds rem to construct the reversed number.
            reverse = reverse * 10 + rem;
            num = num/10;
        };

        //output
        System.out.println ("Reversed Number: " + reverse);
    }
}
