package NumberProblems;

import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		int num;
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter a number: ");
		num = sc.nextInt();
		System.out.println("Factorial of " + num + " is " + fact(num));
		System.out.println("Factorial of " + num + " is " + factorial(num));
		
		sc.close();
	}
	static int fact(int num) {
		if(num == 0) 
			return 1;
			return num * fact(num -1);
		
	}
	static int factorial(int n)
    {
        int res = 1, i;
        for (i = 2; i <= n; i++)
            res *= i;
        return res;
    }
}
		