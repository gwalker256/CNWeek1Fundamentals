// console.log("ywkjer")

// function factorial (n) {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//             return (n * factorial(n-1));

//     }
// }

// console.log(factorial(33));

// const factorial = (n) => {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//             return (n * factorial(n-1));

//     }
// }

// console.log(factorial(33));

// let orderCount = 0;

// const takeOrder = (topping, crust) => {
//     console.log(`Pizza with ${topping} and ${crust}`);
//     orderCount++;
//     console.log (orderCount);
// }

// takeOrder("pineapple", "stuffed crust");
// takeOrder("mushrooms", "thin crust");

const cashWithdrawal = (amount, accnum, balance, pin) => {
    if ((balance >= amount) && pin===9999) {
    console.log (`Withdrawing ${amount} from account ${accnum}`);
    }


}

cashWithdrawal (300, 50449921, 300, 9999);
// cashWithdrawal (30, 50449921);
// cashWithdrawal (200, 50447921);