// Taks 1
// Let's play florist. Declare six variables, remembering to name them according to their purpose:

// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)
// Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. Insert the corresponding values into the variables using the variables declared in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). Display all inventory information in the console in the following form:

let priceOfRose = 8;
let numOfRosesYouHave = 70;
let priceOfLily = 10;
let numOfLiliesYouHave = 50;
let priceOfTulip = 2;
let numOfTulipsYouHave = 120;

let totalRosePrice, totalLilyPrice, totalTulipPrice, priceOfAllFlowers;
totalRosePrice = priceOfRose * numOfRosesYouHave;
console.log(totalRosePrice)
totalLilyPrice = priceOfLily * numOfLiliesYouHave;
console.log(totalLilyPrice);
totalTulipPrice = priceOfTulip * numOfTulipsYouHave;
console.log(totalTulipPrice);
priceOfAllFlowers = totalRosePrice + totalLilyPrice + totalTulipPrice;
console.log(priceOfAllFlowers);
