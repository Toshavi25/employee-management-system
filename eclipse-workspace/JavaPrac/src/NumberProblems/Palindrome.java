package NumberProblems;

import java.util.Scanner;

public class Palindrome {

	public static void main (String[]args)
	  {
		int temp,num, rem,reverse = 0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a number: ");
		num = sc.nextInt();
	    //variables initialization
		
	
		  temp = num;
		     //loop to find reverse number
		     while (temp != 0)
		       {
		     	rem = temp % 10;
		     	reverse = reverse * 10 + rem;
		     	temp /= 10;
		       };

		     // palindrome if num and reverse are equal
		     if (temp == reverse) {
		       System.out.println (temp + " is Palindrome");
		     }
		     else {
		       System.out.println (temp + " is not Palindrome");
		   }
}}

