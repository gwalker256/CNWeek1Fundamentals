// console.log("Hello World");

// let firstName = "Graham";
// let age = "31";
// let favColour = "green";

// console.log(`My name is ${firstName}. I am ${age} years old. My favourite colour is ${favColour}`);

// firstName = "gRaHaM"
// age = "31 and a bit"
// favColour = "leaf green"

// console.log(`My cooler name is ${firstName}. I am actually ${age} years old. More precisely my favourite colour is ${favColour}`);

// let breakfast = "nails";
// let lunch = "rocks";
// let dinner = "larger nails";

// console.log(`For breakfast today I had ${breakfast}, for lunch I had ${lunch} and for dinner I had ${dinner}`);

// breakfast = "wooden sticks"
// lunch = "concrete"
// dinner = "wooden planks"

// console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`);

// console.log (Date());

// let birthday = new Date('January 13, 2021 00:00:00')

// console.log (birthday);


// Noemi's birthday code
// let todayDate = Date.parse("2021-11-16");
// let birthday = Date.parse("2022-05-22");
// let difference = new Date(birthday - todayDate);
// let days = difference/1000/60/60/24;
// console.log(days);

// Noemi's noughts and crosses
// let x = "X";
// let o = "O";
// let blank = " ";

// function matrix_1(space1, space2, space3) {
//     for (var i = 0; i <3; i++) { 
//         if (i == 1){
//             console.log( ${space1} | ${space2} |  ${space3});
//         }
//         else {
//             console.log("   |   |   ");
//         }
//     }
// };

// matrix_1(x, o, blank);
// console.log("------------");

// matrix_1(x,x, blank);
// console.log("------------");
// matrix_1(o, blank, blank);



// let space1="x";
// let space2="o";
// let space3=" ";
// let space4="x";
// let space5="x";
// let space6=" ";
// let space7="o";
// let space8=" ";
// let space9=" ";

// console.log("    |   |");
// console.log(`  ${space1} | ${space2} |   ${space3}`);
// console.log("    |   |");
// console.log("------------");
// console.log("    |   |");
// console.log(`  ${space4} | ${space5} |   ${space6}`);
// console.log("    |   |");
// console.log("------------");
// console.log("    |   |");
// console.log(`  ${space7} | ${space8} |   ${space9}`);
// console.log("    |   |");

// David's birthday
// let todaysDate = Date.now();
// const birthday = new Date(2022, 7, 20);
// let birthdaySeconds = birthday.getTime();
// let secondsUntilBirthday = birthdaySeconds-todaysDate;
// secondsUntilBirthday = Math.floor(secondsUntilBirthday/1000/60/60/24);
// console.log(`There are ${secondsUntilBirthday} days until my next birthday`);

// let age = 18;
// let country = "UK";

// if (age > 17 && country == "UK") {
// console.log("Yes I can serve you")

// }

// else{
// console.log("You aren't old enough")
// }

// let topping = "cheese";

// switch(topping){
//     case "cheese":
//     case "tomato sauce":
//         console.log("These are important ingredients for my pizza.");
//         break; 
//     case "mushrooms":
//         console.log(`I don’t mind having ${topping} on my pizza.`);
//         break;
//     default:
//         console.log(`${topping} should not be on a pizza.`);
// }

// let password = "hiyaaaaaaaaa";
// let passLength = password.length;
// // console.log(passLength);
// if (passLength <8) {
//     console.log("the password is too short")
// }
// else {
//     console.log (password);
// }

// let num = 18;

// if (num%3==0 || num%5==0) {
//     console.log ("This number is divisible by 3 or 5")
// }

// else {
//     console.log ("something else")
// }

// let num = 34;

// if (num%3==0 && num%5==0){
//     console.log ("fizzbuzz")

// }

// else if (num%3==0) {
//     console.log ("fizz")
// }

// else if (num%5==0){
//     console.log ("buzz")
// }

// else{
//     console.log (num)
// }

// let num = 1001;
// let char1 = num.toString().charAt(0);
// let char1 = num.toString().charAt(-1);

// console.log (char1);

// let text = "HELLO WORLD";
// let letter = text.charAt(0);
// console.log (letter);

