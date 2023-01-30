export const coinCounter = (amount, quarters = 0, dimes = 0, nickels = 0, pennies= 0) => {
    if(isNaN(amount)) {
        return "Enter a number";
    }
    else if (amount >= .25) {
        amount -= .25;
        quarters ++;
        return coinCounter(amount, quarters, dimes, nickels, pennies);
    } else if (amount >= .10) {
        amount -= .10;
        dimes ++;
        return coinCounter(amount, quarters, dimes, nickels, pennies);
    } else if (amount >= .05) {
        amount -= .05;
        nickels ++;   
        return coinCounter(amount, quarters, dimes, nickels, pennies);
    } else if (amount >= .01) {
        amount -= .01;
        pennies ++;
        return coinCounter(amount, quarters, dimes, nickels, pennies);
    } 
    else {
        return ["Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies];
    }
}

console.log(coinCounter(1.01))

