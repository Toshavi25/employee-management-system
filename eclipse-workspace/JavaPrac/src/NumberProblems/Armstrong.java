package NumberProblems;

import java.util.Scanner;

public class Armstrong {

	public static void main(String[] args) {
		int  num,sum =0,rem,temp;
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter a number: ");
		num = sc.nextInt();
		
		temp = num;
		
		while(num > 0) {
			rem = num % 10 ;
			num = num/10;
			sum = sum + rem*rem*rem;
			
		}
		
		if (temp == sum) {
		       System.out.println (temp + " is armstrong");
		     }
		     else {
		       System.out.println (temp + " is not armstrong");
		   }
	}

}
