package NumberProblems;

import java.util.Scanner;

//prime number : divide by 1 and itself 2,3,5..
public class PrimeNumber {
	public static void main(String[] args) {
		int num;
		int count = 0;
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter from number: ");
		num = sc.nextInt();
//	method 1 
		for (int i = 1; i <= num; i++) {
			if (num % i == 0) {
				count++;
			}
		}
		if (count == 2) {
			System.out.println(num + " is prime");
		} else {
			System.out.println(num + " is not a prime");

		}
		
		if (isPrime(num)) {
            System.out.println(num + " is prime");
        } else {
            System.out.println(num + " is not a prime");
        }
	}

//method 2 
static boolean isPrime(int num) {
	
	if(num<2) { 
		return false;
	}
	if(num == 2 || num == 3 ) {
		return true;
	}
	if( num % 2 == 0 || num % 3 == 0) {
	return false;
	}
	//Every number is either a multiple of 2, 3, or follows 6k±1.
	for(int i = 5 ; i * i <= num ; i+=6) {
		if(num % i == 0 || num % (i+2) == 0) {
			return false;
		}
	}
	return true;
}
}
