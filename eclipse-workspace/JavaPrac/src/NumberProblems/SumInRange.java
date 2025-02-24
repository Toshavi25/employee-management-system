package NumberProblems;

import java.util.Scanner;

public class SumInRange {
	public static void main(String[] args) {
		// declaration
		int i;
		int sum = 0;
		Scanner sc = new Scanner(System.in);

		System.out.println("*Sum of Number*");
		System.out.print("Enter from number: ");
		int low = sc.nextInt();
		System.out.print("Enter to number: ");
		int high = sc.nextInt();
		
		// method 1 : for loop
		System.out.println("*Sum of Number using for loop *");
		for (i = low; i <= high; i++) {
			sum += i;
		}
		System.out.println(sum);

		// method 2 : formula
		System.out.println("*Sum of Number using formula*");
		sum = high * (high + 1) / 2 - low * (low - 1) / 2 ;
		System.out.println(sum);

		// method 3 : recursion
		System.out.println("*Sum of Number using recursion*");
		sum = getSum( low,high);
		System.out.print(sum);
		
	}
	static int getSum(int low,int high) {

		if (low == high) {
			return high;

		}
		return low + getSum(low+1,high);
	}

}
