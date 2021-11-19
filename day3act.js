// console.log("hi")

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
// }

// for(let i = 0; i < 60; i++) {
//     console.log(favFilms[i]);


// for(let i = 0; i<6; i++){

// let num = Math.ceil(Math.random()*50);
// console.log (num)

// }

// for(let i = 0; i<10; i++){

//    console.log (i)
    
//     }
    
// for(let i = 9; i>-1; i--){

//     console.log (i)
     
//      }
// console.log("HAPPY NEW YEAR!!!")


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

// for(let i = 0; i<6; i++){

// let num = Math.ceil(Math.random()*30);
// console.log (num);
// if (num%7==0){console.log("The number above is divisible by 7")};
// }

let mufos = [];

const bobsFollowers = ["Ben", "Charlie", "Sarah", "Alex"];

const hannahsFollowers = ["Sarah", "Ben", "Isa", "Charlie"];

    for (let i = 0; i < bobsFollowers.length; i++) {
        
        for (let j = 0; j < hannahsFollowers.length; j++){
            
            if (hannahsFollowers[i] === bobsFollowers[j]){        

                mufos.push(hannahsFollowers[i]);
            }
        }    
    }
    
// for (let k = 0; k < mufos.length-1; k++) {console.log(`The mutual followers are ${mufos[k]} and ${mufos.at(-1)}.`);
    
// }

// console.log (`and ${mufos.at(-1)}`);
// for (let l = 0; l < mufos.length; l++) {console.log(`${mufos[l]}.`);
    
// }


console.log(`The mutual followers are ${mufos}.`);


// for(let i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i]);
// }

// mufostrim = mufos.pop();

for (let k = 0; k < mufos.length-1; k++) {console.log(`The mutual followers are ${mufos[k]}`);} console.log(`and ${mufos.at(-1)}.`)

// console.log(`The mutual followers are ${mufos} and ${mufos.at(-1)} `)


console.log (mufos)