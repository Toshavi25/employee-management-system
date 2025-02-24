package NumberProblems;

import java.util.Scanner;

public class PrimeFromRange {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		System.out.print("Enter start number: ");
		int start = sc.nextInt();
		System.out.print("Enter end number: ");
		int end = sc.nextInt();
		System.out.println("prime number from " + start + " to " + end + " are: ");
		for (int i = start; i <= end; i++) {
			if (isPrime(i)) {
				System.out.println(i + " ");
			}
		}
	}

	static boolean isPrime(int num) {
		if (num < 2) {
			return false;
		}
		if (num == 2 || num == 3) {
			return true;
		}
		if (num % 2 == 0 || num % 3 == 0) {
			return false;
		}
		// i = 5 as it is first prime num after 3
		for (int i = 5; i * i <= num; i += 6) {
			// i represent 6k-1 and i +2 represent 6k+1
			if (num % i == 0 || num % (i + 2) == 0) {
				return false;
			}
		}
		return true;
	}
}
