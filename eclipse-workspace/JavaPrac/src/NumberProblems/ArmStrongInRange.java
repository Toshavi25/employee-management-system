package NumberProblems;

import java.util.Scanner;

public class ArmStrongInRange {

	public static void main(String[] args) {
		int  num1,num2;
		
		
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter start number: ");
		num1 = sc.nextInt();
		System.out.print("Enter end number: ");
		num2 = sc.nextInt();
		
		
		armstrongNumber(num1,num2);
		
		sc.close();
	}
	
	static void armstrongNumber(int num1,int num2) {
		for(int i = num1;i<=num2;i++) {
			int sum,rem,temp;
			sum = 0;
			temp = i;
			
			while(temp > 0) {
				rem = temp % 10 ;
				sum = sum + rem*rem*rem;
				temp = temp/10;
				
			}
			if (i == sum) {
			       System.out.println (i);
			     }
		}
	}
}
