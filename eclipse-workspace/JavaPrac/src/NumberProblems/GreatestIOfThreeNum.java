package NumberProblems;

import java.util.Scanner;

public class GreatestIOfThreeNum {
public static void main(String[] args) {
	int num1,num2,num3,temp,result;
	//method 1 : if else
	Scanner sc = new Scanner(System.in);
	System.out.print("Enter 1st number: ");
	num1 = sc.nextInt();
	System.out.print("Enter 2nd number: ");
	num2 = sc.nextInt();
	System.out.print("Enter 3rd number: ");
	num3 = sc.nextInt();
	 
	if(num1>=num2 && num1>=num3) {
		System.out.print(num1 + " is greatest");
	}
	else if(num2>=num1 && num2>=num3){
		System.out.print(num2 + " is greatest");
		
	}else {
		System.out.print(num3 + " is greatest");
	}
	
	// ternary operator
	temp = (num1>=num2)?num1:num2;
	result = (temp>=num3)?temp:num3;
	System.out.println(result + " is greatest");
}
}
