 
                                     /* ***********************
                                        Name:Muhammad Khurram
                                            Roll NO:5852

                                                */ 




/*
*********Question 1**********
var userName=prompt("Please enter your name ");
console.log(userName);
*/



/*
*********Question 2**********
var table = +prompt("Enter Table","5");

console.log(table+""+"*"+""+"1"+""+"="+""+table*1);
console.log(table+""+"*"+""+"2"+""+"="+""+table*2);
console.log(table+""+"*"+""+"3"+""+"="+""+table*3);
console.log(table+""+"*"+""+"4"+""+"="+""+table*4);
console.log(table+""+"*"+""+"5"+""+"="+""+table*5);
console.log(table+""+"*"+""+"6"+""+"="+""+table*6);
console.log(table+""+"*"+""+"7"+""+"="+""+table*7);
console.log(table+""+"*"+""+"8"+""+"="+""+table*8);
console.log(table+""+"*"+""+"9"+""+"="+""+table*9);
console.log(table+""+"*"+""+"10"+""+"="+""+table*10);

*/



/*
********** Question 3**********
var city =prompt("Enter Your city");
 if (city==='karachi')
 {
     console.log('Welocme to city of lights');
 }
 */





/*
*********Question 4*************
var gender =prompt("Enter Your gender");
if (gender==='male')
{
    console.log('Good Morning Sir');
}else
if (gender==='female')
{
    console.log("Good Morning Ma'am");
}
*/





/*
************Question 5*************
var signal=prompt('Enter Signal Color');
if (signal==='red')
{
    console.log("vehicles must stop");
}else
if (signal==='yellow')
{
    console.log("vehicles should get ready to move");
}else
if (signal==='green')
{
    console.log("vehicles can move now");
}
*/





/*
*********Question 6*********
var maxAge=+prompt("Enter Max Age");
var currentAge=+prompt("Enter currentAge");
if(currentAge<=maxAge)
{
    console.log("You are Welcome");
}
*/






/*
***********Question 7*********
var fuel =+prompt("Enter Remaing fuel");
if(fuel<0.25)
{
    console.log("Please refill the fuel in your car");
}
*/


/*
*********Question 8***********

a:alert would be displayed.
b:alert is not displayed.
c:condition 2 and condition 4 is true.
d:alert would be displayed.
e:True is displayed.
f:alert is displayed.


 */    





/*
**********Quesion 9************
var marks_obt=+prompt("Enter Obtained Marks");
var total_marks=+prompt("Enter Total Marks");
var per =(marks_obt/total_marks)*100;
if(per>=80)
{
    console.log("Total Marks"+total_marks);
    console.log("Obtained Marks"+marks_obt);
    console.log("Percentage"+per);
    console.log("Grade = A-one");
    console.log("Remarks=Excellent");
}else

if(per>=70)
{
    console.log("Total Marks"+total_marks);
    console.log("Obtained Marks"+marks_obt);
    console.log("Percentage"+per);
    console.log("Grade = A");
    console.log("Remarks=Good");
}else
if(per>=60)
{
    console.log("Total Marks"+total_marks);
    console.log("Obtained Marks"+marks_obt);
    console.log("Percentage"+per);
    console.log("Grade = B");
    console.log("Remarks=You need to improve")
}else
{
    console.log("Total Marks"+total_marks);
    console.log("Obtained Marks"+marks_obt);
    console.log("Percentage"+per);
   console.log("Grade = Fail");
   console.log("Remarks=Sorry"); 
}
*/


/*
*********Question 10*************
var item1=prompt("Name of item1");
var item2=prompt("Name of item 2");
var price1=+prompt("Price of item 1");
var price2=+prompt("Price of item 2");
var s_charges=250;
var q1=+prompt("Quantity of item 1");
var q2=+prompt("Quantity of item 2");

var totalAmount=(price1*q1)+(price2*q2)+(s_charges);


if(totalAmount>2000)
{
    var dis=totalAmount-((totalAmount/100)*10);
    console.log("Price of"+" "+item1+" "+"is"+" "+price1);
    console.log("Quantity of"+" "+item1+" "+"is"+" "+q1);
    console.log("Price of"+" "+item2+" "+"is"+" "+price2);
    console.log("Quantity of"+" "+item2+" "+"is"+" "+q2);

    console.log("Shipping charges is"+" "+s_charges);
    console.log("Total Amount of your order is"+" "+totalAmount);
    console.log("Discount price is"+dis);

}else
{
console.log("Price of"+" "+item1+" "+"is"+" "+price1);
console.log("Quantity of"+" "+item1+" "+"is"+" "+q1);
console.log("Price of"+" "+item2+" "+"is"+" "+price2);
console.log("Quantity of"+" "+item2+" "+"is"+" "+q2);

console.log("Shipping charges is"+" "+s_charges);
console.log("Total Amount of your order is"+" "+totalAmount);
console.log("Discount price is 0");
}
*/

 


/*
********Question 11**********
var a=+prompt("Guess a Secret Number Range From 1 to 10","Enter a Secret Number");
var b=9;

if(a===b)
{
    console.log("“Bingo! Correct answer”");
}else
{
    console.log("“Close enough to the correct answer”. ");
}
*/



/*
********Question 12**********

var number =+prompt("Enters a Number");
if(number%3===0)
{
    console.log("Divisible by 3");
}else
{
    console.log("Not Divisible by 3");
}
*/



/*
********Question 13**********

var teamAname=prompt("Enter Your Team Name");
var scoreA=+prompt("Enter Score of Team A");
var teamBname=prompt("Enter Your Team Name");
var scoreB=+prompt("Enter Score of Team B");

if(scoreA>scoreB)
{
    console.log(teamAname+" "+"has"+" "+"won");
}else 
if(scoreA===scoreB)
{
    console.log("Game is Tie");
}
else
{   
    console.log(teamBname+" "+"has"+" "+"won");
}
*/


/*

********Question 14**********
var number =+prompt("ENter Number");
var bolean =prompt("ENter Boolean");
var string=prompt("Enter String");

console.log(number+" "+"is"+" "+"a"+" "+"number");
console.log(bolean+" "+"is"+" "+"a"+" "+"boolean");
console.log(string+" "+"is"+" "+"a"+" "+"string");
*/



/*
********Question 15**********

var a=+prompt("Enter Number");
if(a%2===0)
{
    console.log("Number is Even");

}else
{
    console.log("Number is odd");
}
*/


/*
********Question 16**********

var temp =prompt("Enter Temperature");
if(temp>40)
{
    console.log("It is too hot outside");
}
else
if(temp>30)
{
    console.log("The Weather today is Normal");

}else
if(temp>20)
{
    console.log("Today’s Weather is cool");
}else
{
    console.log(" OMG! Today’s weather is so Cool ");
}

*/



/*

********Question 17**********

var a =+prompt("Enter Value","Your Value");
var b =prompt("Enter Operator","Your Operator");
var c =+prompt("Enter Value","Your Value");

if(b=="+")
{
    console.log(a+c);
}else 
if(b=="-")
{
    console.log(a-c);
}else 
if(b=="*")
{
    console.log(a*c);
}else 
if(b=="/")
{
console.log(a/c);
}
*/


/*

********Question 18**********

var day=prompt("Enter Day");
if(day==="saturday")
{
    console.log("It's a weekend");
}else
if(day==="sunday")
{
    console.log("Yay! It’s a holiday");
}else
{
    console.log("Its's a weekday");
}

*/



/*
********Question 19**********

var number=+prompt("Enter Score");
if(number>50)
{
    console.log("You are passed");
}else
{
    console.log("Try again");
}

*/



/*
********Question 20**********
var a=+prompt("Enter Number 1");
var b=+prompt("Enter Number 2");
if(a>b)
{
    console.log("The greater Number of"+" "+a+" "+ "and"+" "+b+" "+"is"+" "+a);
}else
if(a<b)
{
    console.log("The greater Number of"+" "+a+" "+ "and"+" "+b+" "+"is"+" "+b);
}else
{
    console.log("Both are Equal");
}
*/



/*
********Question 21**********

var code=prompt("Enter language Code 'es','de','en'");
if(code==="es")
{
    console.log("Hola Mundo");
}else
if(code==="de")
{
    console.log("Hallo Welt");
}else 
if(code==="en")
{
    console.log("Hello world");
}
*/



/*
********Question 22**********

var a =+prompt("Enter Number");
if(a>=0)
{
    console.log("Number is positive");
}else
{
    console.log("Number is negative");
}
*/




/*

********Question 23**********

var number =+prompt("Enter Number");
var noun=prompt("Enter Noun");

if(number>1)
{
    console.log(number+" "+noun+"s");
}else
{
    console.log(number+" "+noun);
}
*/

















