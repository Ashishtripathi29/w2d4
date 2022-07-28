// problem 1

// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// method 1: using nested if else
let num1=11;
if(num1%2==0 ){
    if(num1<15){
        console.log('a')
    }
    else{
        console.log('b')
    }
}
else{
    if(num1<10){
        console.log('c')
    }
    else{
        console.log('d')
    }
}

// method 2: using logical operators
let num2=11;
if(num2%2==0 && num2<15){
        console.log('a')
    }
else if(num2%2==0 && num2>15){
        console.log('b')
    }

else if(num2<10){
    
        console.log('c')
    }
else{
        console.log('d')
    }




/**
 * use the number variable as user input.
 * 
 * change this number yourself to other values and see if
 * you are getting the right answer
 * example: const number = 12
 */ 
//  const number = 50;
 
// // solve
// let number1=parseInt(prompt("Enter the number"))
// if(number==number1){
//     console.log("right input")
// }
// else{
//     console.log("wrong input")
// }

//  // =================================================================================================== //
 
 // problem 2
 
 const letters = ["Hi", "my", "name", "is", "Akash"];
 
 /**
  * concat the strings in the aboeve array to get the following result
  * "Hi, my name is Akash."
  * Caution: string has a comma and a full stop
  */
 
 // Hint: solve this using for loop
 
 
 
 // =================================================================================================== //
 
 // problem 3
 /**
  * what will be the result of the consoles and why?
  * 
  */
 
 let age = 20;
 age = 100;
 const place = "Delhi";
 {
     let age = 30;
     age = 40;
     console.log("this is age one ===>", age);
     console.log("this is place ====>", place);
 }
 
 age = 60;
 console.log("this is age two ===>", age);
 /* console.log("this is age one ===>",age)  print 40 becouse of age is define in the block after define value restore 40 thats why it print 40;

  console.log("this is place ====>", place); print "Delhi" becouse place is define out of block and it is const it can not change

console.log("this is age two ===>", age); print 60 becouse it is out of block but it is restored 3rd time by 60
 */
 
 // =================================================================================================== //
 
//  // problem 4
 
//  // Find sum and multiplication of  all natural numbers from 10 to 20
 let multi=1;
for (let i= 10; i <= 20; i++) {
   if(i%2==0){multi=multi*i} 
    
}
console.log(multi)
 
 // =================================================================================================== //
 
 // problem 5
 
 // print "yes" if a given year is a leap year else "no"
 //solve this using two methods
 // method 1: using if else
 // method 2: using ternary operator
 
 /**
  *
  * Hint:
  * every year that is exactly divisible by four is a leap year,
  * except for years that are exactly divisible by 100,
  * but these centurial years are leap years if they are exactly divisible by 400
  *
  */
 
 /**
  * use the year variable as user input.
  * 
  * change this number to other values yourself and see if
  * you are getting the right answer
  * example: const year = 1000
  */
 const year = 2004;

 // method 1
 if(year%4==0 && year%100!=0){
    console.log("leap year")
 }
 else if(year%400==0){
    console.log("leap year")
 }
 else{
    console.log("not a leap year")
 }

 // method 2
 year%4==0 && year%100!=0 || year%400==0?console.log("leap year"):console.log("not a leap year")
 
 
 
 // =================================================================================================== //
 
 // problem 6
 
 // find the area of a triangle.  Lengths of its sides are 5, 6, 7
 
//  A=s(s﹣a)(s﹣b)(s﹣c)
// s=a+b+c
// 2
let l1=5
let l2=6
let l3=7
let A;
let s;
s=(l1+l2+l3)/2

let sq=s*(s-l1)*(s-l2)*(s-l3)
A = Math.sqrt(sq)
console.log(A)

 // =================================================================================================== //
 
 // problem 7
 
 
 // write program to check whether num variable is between 100 and 200 or 400 and 500
 // print true if it is, else print false
 // handle edge cases. Hint: what if number is a string or null?
 
 
 const num = 20;
 /**
  * use the num variable as user input.
  * 
  * change this number to other values yourself and see if
  * you are getting the right answer
  * example: const num = 250
  */
 
 const unum=parseInt(prompt("Enter the number"))
    if(unum>100 && unum<200 || unum<500 && unum>400){
        console.log("True")
    }
    else{
        console.log("False")
    }
 

 
 // =================================================================================================== //
 
 // problem 8
 
 // you have 3 numbers.
 // write a program which can find the largest number
 
 /**
  * use the numOne, numTwo and numThree variable as user input.
  * 
  * change them to other values yourself and see if
  * you are getting the right answer
  * example: const numOne = 250, numTwo = 4, numThree = 5
  */
  const numOne=parseInt(prompt("Enter the first number"));
  const numTwo = parseInt(prompt("Enter the second number"));
  const numThree =parseInt(prompt("Enter the third number"));
  if(numOne>numTwo){
    if(numOne>numThree){
        console.log(numOne)
    }else{console.log(numThree)
    }
        
  }
  else{
    if(numTwo>numThree){
        console.log(numTwo)
    }else{console.log(numThree)
    }
      
  }
 
 // =================================================================================================== //
 
 // problem 9
 
 
 // write a code which prints true ifÂ one of them is 8 or their sum or difference is 8. 
 // Otherwise it should print false
 
 

 /**
  * use the a and b variable as user input.
  * 
  * change them to other values yourself and see if
  * you are getting the right answer
  * example: const a = 8, b = 5
  */

  const a =parseInt(prompt("Enter the first number"));
  const b = parseInt(prompt("Enter the second number"));

  if(a==8 || b==8 || a-b==8 || b-a==8){
    console.log("True")
  }
  else(
    console.log("False")
  )