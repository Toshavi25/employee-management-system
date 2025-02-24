package NumberProblems;
import java.util.Scanner;

public class SumOfDigitOfNumber {

	public static void main(String[] args) {
		int num;
		int sum = 0 ;
	
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter number: ");
		num = sc.nextInt();
		System.out.println("sum of digit is "+getSum(num));
		while(num !=0) {
			sum += num % 10;
			num /= 10;
		}
		System.out.println("sum of digit is "+sum);
		
	}
	
 static int getSum(int num) {
	 if (num ==0) {
		 return 0;
	 }
	 return (num % 10) + getSum(num/ 10);
 }

}
