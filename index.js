console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

let receivedPassword = "password1234";

// Part 2: Even / Odd
const number = 6;

// Part 3: Hotdogs
const numberOfHotdogs = 5;

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);

/*
    Part 1
*/

//receivedPassword = "123456789";
receivedPassword = "h4x0r1337";
const userName = "Brunhilde1984";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log(`Welcome! You are logged in as ${userName}.`);
}

/*
    Part 2
*/
const isNumberEven = number % 2 === 0;

if (isNumberEven) {
  console.log("Number is even.");
} else {
  console.log("Number is uneven.");
}

/*
    Part 3
*/
let hotDogPriceCalculated = null;
let pricePerUnit = null;
const currency = "€";

if (numberOfHotdogs < 5) {
  pricePerUnit = 2;
  hotDogPriceCalculated = numberOfHotdogs * pricePerUnit;
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  pricePerUnit = 1.5;
  hotDogPriceCalculated = numberOfHotdogs * pricePerUnit;
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  pricePerUnit = 1;
  hotDogPriceCalculated = numberOfHotdogs * pricePerUnit;
} else if (numberOfHotdogs > 1000000) {
  pricePerUnit = 0.1;
  hotDogPriceCalculated = numberOfHotdogs * pricePerUnit;
} else if (numberOfHotdogs === 5) {
  //Because there was no instruction how much 5 hotdogs would cost :P
  pricePerUnit = 0;
  hotDogPriceCalculated = numberOfHotdogs * pricePerUnit;
}

console.log(
  `${numberOfHotdogs}x Hotdogs, price per Unit ${pricePerUnit}${currency}, Totalsum ${hotDogPriceCalculated}${currency}`
);
