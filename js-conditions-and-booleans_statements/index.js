console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r13371";

if (SUPER_SECRET_PASSWORD === "h4x0r13371") {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

/*************************************************************************************************************/

const receivedPassword = "password1234";

if (receivedPassword === "password1234") {
  console.log("Welcome! You are logged in as Müller1984.");
} else {
  console.log("Sorry, access denied!");
}

/*************************************************************************************************************/

// Part 2: Even / Odd
const number = 6;

if (number % 2 == 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}

/*************************************************************************************************************/

// Part 3: Hotdogs
const numberOfHotdogs = 1000500;

if (numberOfHotdogs < 5) {
  console.log("2 Euro per Hotdog.");
} else if (numberOfHotdogs < 100) {
  console.log("1,50 Euro per Hotdog.");
} else if (numberOfHotdogs < 1000000) {
  console.log("1,00 Euro per Hotdog.");
} else {
  console.log("0,10 Euro per Hotdog.");
}

/*************************************************************************************************************/

// Part 4: Daytime
const currentHour = 20;

const statement = currentHour < 17 ? "Still need to learn" : "Partytime!!!";
console.log(statement);

/*************************************************************************************************************/

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + (name === "" ? "Coach" : name) + "!";

console.log(greeting);
