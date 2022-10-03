// Task 2

// Modify the code from the previous example. Assume that the prices of flowers will be constant (they will not change). Declare and initialize the remaining variables in the same way as in the previous example. Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30. Display all the collected information in the console again.

const priceOfRose = 8;
let numOfRosesYouHave = 70;
const priceOfLily = 10;
let numOfLiliesYouHave = 50;
const priceOfTulip = 2;
let numOfTulipsYouHave = 120;

let totalRosePrice, totalLilyPrice, totalTulipPrice, priceOfAllFlowers;
totalRosePrice = priceOfRose * numOfRosesYouHave;
console.log(`total rose price = ${totalRosePrice}`)
totalLilyPrice = priceOfLily * numOfLiliesYouHave;
console.log(`total lily price = ${totalLilyPrice}`);
totalTulipPrice = priceOfTulip * numOfTulipsYouHave;
console.log(`total tulip price = ${totalTulipPrice}`);
priceOfAllFlowers = totalRosePrice + totalLilyPrice + totalTulipPrice;
console.log(`price of all flowers = ${priceOfAllFlowers}`);

numOfRosesYouHave = 70-20;
numOfLiliesYouHave = 50-30;

totalRosePrice = priceOfRose * numOfRosesYouHave;
console.log(`total rose price after change = ${totalRosePrice}`)
totalLilyPrice = priceOfLily * numOfLiliesYouHave;
console.log(`total lily price after change = ${totalLilyPrice}`);
totalTulipPrice = priceOfTulip * numOfTulipsYouHave;
console.log(`total tulip price after change = ${totalTulipPrice}`);
priceOfAllFlowers = totalRosePrice + totalLilyPrice + totalTulipPrice;
console.log(`price of all flowers after change = ${priceOfAllFlowers}`);
