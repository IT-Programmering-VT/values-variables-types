// VALUES & VARIABLES

let lesson = "first";
// declaring a variable and assigning a value

//console.log(5 + 5 - 3);

let name = "Helena";
// Do NOT use name as a variable name its kinda reserved
//console.log(name);
// we need to tell javascript explicitly that it should print the
// output in the consol

//let firstName = "Helena";
// we declare a variable called firstName and then assign it a value of "Helena"
// we can then consol the variable that contains the value
// the output to the console will be "Helena"
// first letter in a variable name should always be small not capital. If we wanna name our varibale for example: first name
// we cant use first name = "Helena", will get an error. But we can do it like this: firstName. Thas called camelcase and is best practice

let week1 = "16";
let week2 = "15";
// this is ok we declare two variables called week1 and week2
// but to be really clear and to make our code easier to read

let currentWeek = "16";
let lastWeek = 15;
// we can name them like this if its actually the current weel and last week
// this makes it more clear of what value our variables actually holds

//console.log(currentWeek, lastWeek);

let years = 3;

// DATA TYPES
// a boolean can only be true or false, we use it to make descisions in our code
// console.log(true);

let youWillLearnJs = true;
//console.log(youWillLearnJs);
// right way of decalring a boolean variable and assgning the value to true

// we can use the built in operator typeof to know what data type our value is
// but be aware that DATA TYPE and VALUE is not the same
//console.log(typeof true);
// here the DATA TYPE is a boolean and the value is false
//console.log(typeof 35);
// here the DATA TYPE is number and the VALUE is 35
//console.log(typeof "JavaScript");
// here the DATA TYPE is a string and the VALUE is "JavaScript"

youWillLearnJs = false;
//console.log(youWillLearnJs);
// we change the value of our variable from true to false
// this time when we console log it it will return false

let day;
//console.log(day);
//console.log(typeof day);
// both type and value is undefined
// value of day is undefined
// its undefined because we only declared a variable we didnt assign a value to it

// console.log(typeof null);
// typeof null is actually an error i javascript and will give you the result object
// which is not true at all because we learned earlier that null is one of the 7
// primitive values
// but it costs more to fix this than just leave it because of legacy reasons in javascript
// you will probably never encounbter this or use it at alla but now you know :)

// LET, CONST AND VAR
// keywords that we use to declare varibles
// we use let to declare variables where the value might change in the future
// we use const when the value cant change

let age = 35;
//console.log(age);

age = 30;
//console.log(age);

const newAge = 40;
//console.log(newAge);

//newAge = 50;
//console.log(newAge);
// the line abve will not run it will throw an exeption

//let emptyVariable;

//const newEmptyVariable;

// convention is to use const as much as you can and only use let in some cases where you really
// need to change the value later
// this will come natural to you as we go further in this course
// so from now on you use const and only use let when you really have to

// var is the old way of declarung variables and we will not use it
// it was used before es6
var job = "developer";
//console.log(job);

job = "teacher";
//console.log(job);
// you can change the value of a variable that is declared with var
// let and var are kinda like but underneath they really arent

//lastName = "Johansson";
//console.log(lastName);
// we can just type value and not assigning it to a variable
// javascript wont give an error but this is not the convention and not
// efficient

// BASIC OPERATORS
// you can use operators to concatinate and subtract in javascript
// you can concatinate numbers aswell as strings
// variety of different operators like mathematic, comparison, logical, assignment etc..

// mathematic operators
const myAge = 2021 - 1985;
console.log(myAge);

const brothersAge = 2021 - 1995;
//console.log(myAge, brothersAge);
// we can log both variables to the console separating them with a comma

const now = 2020;
const myAgeTwo = now - 1985;
const brothersAgeTwo = now - 1995;
//console.log(myAgeTwo, brothersAgeTwo);

//console.log(myAgeTwo * 2, myAgeTwo / 2);
//console.log(myAgeTwo / 2);

//console.log(10 + 10);
const firstName = "Helena";
const lastName = "Johansson";

//console.log(firstName, lastName);
//console.log(firstName + " " + lastName);

// assignment operator =
let x = 10 + 5;
//console.log(x);

x += 10;
// x = x + 10 reassigning x value here is 25
//console.log(x);

x *= 4;
// x = x * 4 = 100
//console.log(x);

x++;
//console.log(x);
// we increadse the value with 1 using the plus operator

x++;
//console.log(x);
// we increadse the value with 1 using the plus operator

x--;
//console.log(x);
// we decrease the value with one

x--;
// decreasing a value by one
//console.log(x);
// we decrease the value with one

const firstNumber = 25;
const secondNumber = 39;

//console.log(firstNumber > secondNumber);
//console.log(firstNumber < secondNumber);

//console.log(firstNumber <= 19);

const isFullAge = brothersAge >= 18;
//console.log(isFullAge);

console.log(now - 1991 > now - 1985);
// now we are asking javascript to determine if now (that has the value 2021) - 1991
// is bigger than now (2021) - 1985
// the result in the console is false since its not bigger
// but how does javascript know what to calculate first?
// You can learn that by watching the video about operator precedence :)
