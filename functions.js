// console.log("h")

// const pressGrindBeans = () => {

//     console.log("Grinding for 20 seconds");

// }

// pressGrindBeans();

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
    console.log ("Stopping the grind");
    coffeeIsGrinding = false;
    } else {
            console.log("Grinding is about to begin");
            coffeeIsGrinding = true;
    }
}
pressGrindBeans();