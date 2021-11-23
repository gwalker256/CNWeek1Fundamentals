// dot notation activity 1

// console.log("    I   I");
// console.log("    I   I");
// console.log("    I   I");
// console.log("------------");
// console.log("    I   I");
// console.log("    I   I");
// console.log("    I   I");
// console.log("------------");
// console.log("    I   I");
// console.log("    I   I");
// console.log("    I   I");

// variables activity 1

// let firstName = "Graham";
// let age = "31";
// let favColour = "green";

// console.log(`My name is ${firstName}. I am ${age} years old. My favourite colour is ${favColour}`);

// firstName = "gRaHaM"
// age = "31 and a bit"
// favColour = "leaf green"

// console.log(`My cooler name is ${firstName}. I am actually ${age} years old. More precisely my favourite colour is ${favColour}.`);

// variables activity 2

// let breakfast = "nails";
// let lunch = "rocks";
// let dinner = "larger nails";

// console.log(`For breakfast today I had ${breakfast}, for lunch I had ${lunch} and for dinner I had ${dinner}`);

// breakfast = "wooden sticks"
// lunch = "concrete"
// dinner = "wooden planks"

// console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`);

// variables activity 3 (I am so unimpressed the months start at 0)

// let currentDay = Date.now();
// let birthday = new Date(2022, 00, 13);
// let seconds = new Date(birthday - currentDay) / 1000;
// let days = seconds/60/60/24;

// console.log (Math.floor(days));

// variables activity 4

// const space1="x";
// const space2="o";
// const space3=" ";
// const space4="x";
// const space5="x";
// const space6=" ";
// const space7="o";
// const space8=" ";
// const space9=" ";

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

// if else activity 1

// let age = 18;
// let country = "UK";

// if (age > 17 && country == "UK") {
// console.log("Yes I can serve you")

// }

// else{
// console.log("You aren't old enough")
// }

// if else activity 2

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

// if else activity 3

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

// if else activity 4

// let num = 30;

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

// if else activity 5


// const num = 123321;
// const string = num.toString(); 
// const reversed = string.split('').reverse().join('');

// if (num == reversed){
//     console.log(`${num} is a palindrome`);
// } 

// else {
//     console.log(`${num} is not a palindrome`);
// }

// if else activity 6

// const time = 1900;
// const placeOfWork = "Desk 5"
// const townOfHome = "Salford"

// if (time <=930 || time >= 1730){

//     console.log (`At ${time} I am at ${townOfHome} `)

// }

// else{

//  console.log (`At ${time} I am at ${placeOfWork} `)

// }

// if else activity 7

// let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// console.log (`The last vowel has the index position ${Math.max (text.lastIndexOf("a"), text.lastIndexOf("e"), text.lastIndexOf("i"), text.lastIndexOf("o"), text.lastIndexOf("u"))}`);

// if else activity 8

// const word = "strings";
// const reversed = word.split('').reverse().join('');

// if (word.charAt(0) == reversed.charAt(0)) {
// console.log (true);

// } 

// else console.log (false);


// if else activity 9

// const num1 = 50;
// const num2 = 10;


// if ((num1 + num2)%2===0){
// console.log (num1 + num2)
// }

// else console.log (num1*num2)


// arrays activity 1

// let favSongs = [
//     "Dolly Parton - I Will Always Love You",
//     "Howlin Wolf - Smokestack Lightnin'",
//     "Cradle of Filth - Her Ghost in the Fog"

// ];

// favSongs.push("Aqua - Barbie Girl");
// favSongs.push("Steps - The Way That You Make Me Feel");
// favSongs.pop();
// console.log(favSongs);

// arrays activity 2

// const nums = [1, 2, 4, 5];
// console.log (nums)
// nums.splice(2, 0, 3);
// console.log(nums);

// loops activity 1

// let favFilms = [
//     "The Brave Little Toaster",
//     "Mean Girls",
//     "Dr Strangelove",
//     "Splitting Heirs",
//     "Scream"

// ];

// console.log (favFilms);

// favFilms.push("Bored Of");
// favFilms.push("Thinking of Films");

// console.log (favFilms);

// for(let i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i]);
//     }



// loops activity 2

// let num = Math.ceil(Math.random()*50);
// console.log (num)

// loops activity 3

// for(let i = 0; i<10; i++){

//    console.log (i)
    
//     }
    
// for(let i = 9; i>-1; i--){

//     console.log (i)
     
//      }
// console.log("HAPPY NEW YEAR!!!")

// loops activity 4

// let favFilms = [
//     "The Brave Little Toaster",
//     "Mean Girls",
//     "Ghostbusters",
//     "Splitting Heirs",
// ];

// for(let i = 0; i<favFilms.length; i++){


// console.log (favFilms[i]);

// }

// if (favFilms[2]=="Ghostbusters"){
//     console.log("Yay it’s Ghostbusters")

    
// }
// else{
//     console.log("“Boo! We want Ghostbusters!")
// }

// loops activity 5

// for(let i = 0; i<6; i++){

// let num = Math.ceil(Math.random()*30);
// console.log (num);
// if (num%7==0){console.log("The number above is divisible by 7")};
// }

// loops activity 6

// let mufos = [];

// const bobsFollowers = ["Ben", "Charlie", "Sarah", "Alex"];

// const hannahsFollowers = ["Sarah", "Jim", "Isa", "Charlie"];

//     for (let i = 0; i < bobsFollowers.length; i++) {
        
//         for (let j = 0; j < hannahsFollowers.length; j++){
            
//             if (hannahsFollowers[i] === bobsFollowers[j]){        

//                 mufos.push(hannahsFollowers[i]);
//             }
//         }    
//     }
    
// console.log(`The mutual followers are ${mufos}.`);

// loops 7 

// for (let num1 = 0; num1 < 10; num1++) {
//     console.log(num1);
//   };


//   let num2 = 0;
//   let num3 = 10;
//   while (num2 < num3) {
//         console.log(num2);
//         num2++;

//   }

//   let num4 = 0;
//   do {
//     console.log(num4);
//     num4++;
//   } while (num4<10);

// functions activity 1

// const factorial = (n) => {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//             return (n * factorial(n-1));

//     }
// }

// console.log(factorial(33));

// functions activity 2

// let orderCount = 0;

// const takeOrder = (topping, crust) => {
//     console.log(`Pizza with ${topping} and ${crust}`);
//     orderCount++;
//     console.log (orderCount);
// }

// takeOrder("pineapple", "stuffed crust");
// takeOrder("mushrooms", "thin crust");

// functions activity 3 not done

// objects activity 0

// let day = "Monday";
// let alarm;

// const thisobject = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"




// };

// if (day === "Saturday" || day === "Sunday") {
//     alarm = thisobject.weekdayAlarm;
//     }
//     else {
//         alarm = thisobject.weekdayAlarm;

//     } 
// console.log(alarm);

// objects activity 1

// const person = {
//     name: "Graham",
//     age: 31,

//     readName () { 
        
//         console.log(`Hello my name is ${this.name}`);
        

//     }

    
// }

// person.readName();

// objects activity 2 not done

