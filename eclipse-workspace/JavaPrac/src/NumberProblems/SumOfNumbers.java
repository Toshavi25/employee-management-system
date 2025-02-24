package NumberProblems;

import java.util.Scanner;

public class SumOfNumbers {
	public static void main(String[] args) {
		// declaration
		int i;
		int sum = 0;
		Scanner sc = new Scanner(System.in);

		System.out.println("*Sum of Number*");
		System.out.print("Enter a number: ");
		int num = sc.nextInt();

		// method 1 : for loop
		System.out.println("*Sum of Number using for loop *");
		for (i = 1; i <= num; i++) {
			sum += i;
		}
		System.out.println(sum);

//		// method 2 : formula
//		System.out.println("*Sum of Number using formula*");
//		sum = num * (num + 1) / 2;
//		System.out.println(sum);
//
//		// method 3 : recursion
//		System.out.println("*Sum of Number using recursion*");
//		sum = getSum(num);
//		System.out.print(sum);
		
	}

	
	static int getSum(int num) {

		if (num == 0) {
			return num;

		}
		return num + getSum(num - 1);
	}
}
