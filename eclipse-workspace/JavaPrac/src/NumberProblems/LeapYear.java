package NumberProblems;

import java.util.Scanner;

/*Following are the two conditions for year to be leap year
1. The year must be divisible by 400.
2. The year must be divisible by 4 but not 100.*/
public class LeapYear {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter from year: ");
		int year = sc.nextInt();
		if(year % 400 ==0 || (year % 4 == 0 && year % 100 != 0)){
			System.out.println (year + " is a Leap Year");
		} else
	         System.out.println (year + " is not a Leap Year");
	   }

	}


