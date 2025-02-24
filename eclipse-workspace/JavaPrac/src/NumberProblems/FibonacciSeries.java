package NumberProblems;

import java.util.Scanner;

public class FibonacciSeries {
	public static void main(String args[]) {
		int a = 0;
		int b = 1;
		int value;
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter start number: ");
		value = sc.nextInt();

		int store;
		System.out.print(a + " " + b + " ");
		for (int i = 2; i < value; i++) {
			store = a + b;
			a = b;
			b = store;
			System.out.print(store + " ");
		}

	}

}
