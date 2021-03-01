let num1= prompt('enter a number');
let num2= prompt('enter second number');

num1 = parseInt(num1);
num2 = parseInt(num2);
result1 = (num1+num2);
result2 = (num1-num2);
result3 = (num1*num2);
result4 = (num1/num2);

document.getElementById('result1').innerHTML = "Sum is: " + num1 + "+ " + num2 + " = " + result1;
document.getElementById('result2').innerHTML = "Divided is: " + num1 + "- " + num2 + " = " + result2;
document.getElementById('result3').innerHTML = "multiplication is: " + num1 + "*" + num2 + " = " + result3;
document.getElementById('result4').innerHTML ="division is: " + num1 + "/ " + num2 + " = " + result4;