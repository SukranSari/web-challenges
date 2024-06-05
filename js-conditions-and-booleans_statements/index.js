console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r13371";

if (SUPER_SECRET_PASSWORD == "h4x0r1337") {
  // code that is executed only if condition "isSunShining" is true
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  // code that is executed only if condition "isSunShining" is false
  console.log("Access denied!");
}

/*************************************************************************************************************/

const receivedPassword = "password1234";

const check = receivedPassword
  ? console.log("Welcome! You are logged in as Brunhilde1984.")
  : console.log("Access denied!");

/*************************************************************************************************************/

// Part 2: Even / Odd
const number = 5;

if (number % 2) {
  console.log("Odd");
} else {
  console.log("Even");
}

/*************************************************************************************************************/

const numberr = 8;

if (numberr == 8) {
  console.log("EVEN");
}

/*************************************************************************************************************/

// Part 3: Hotdogs
const numberOfHotdogs = 2;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs < 18) {
  console.log("Good afternoon.");
} else if (numberOfHotdogs === 24) {
  console.log("Good night.");
} else {
  console.log("Good evening.");
}

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
