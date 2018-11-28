var userName = window.prompt("Please enter you name: ");
// var greetingParagraph = document.getElementById("greeting");
// greetingParagraph.innerHTML +="," + userName;
var greetingParagraph = document.getElementById("greeting").innerHTML += ", " + userName;
var num1 = parseInt(window.prompt("Enter the first number: "));
var num2 = parseInt(window.prompt("Enter the second number: "));

var operand1Paragraph = document.getElementById("operand1").innerHTML += num1;
var operand2Paragraph = document.getElementById("operand2").innerHTML += num2;

// var addition = document.getElementById("addition").innerHTML = num1 + num2;
var sum = num1 + num2;
var difference = num1 - num2;
var multiply = num1 * num2;
var quotent = num1/ num2;
var modulus = num1%num2;


var addition= document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
var subtraction= document.getElementById("subtraction").innerHTML = "The difference between " + num1 + " and " + num2 + " is " + difference;
var product= document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 + " is " + multiply;
var quotient= document.getElementById("division").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotent;
var mod= document.getElementById("modulus").innerHTML = "The result of the modulus operation on " + num1 + " and " + num2 + " is " + modulus;