console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const title = "JavaScript für Dummies";
const author = " Vander Veer, Emily A.";
const rating = 5;
const salesNumber = 100;

// --^-- write your code here --^--

/*2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120*/

console.log("Titel: " + title);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("salesNumber: " + salesNumber);

/*Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.*/

console.log(" ");
console.log(
  "Ausgabe nach der Aktualisierung der Variablen salesNumber und rating:"
);

// --v-- write your code here --v--
function changeBookData() {
  let rating = 5;
  let newRating = rating + 1;

  let salesNumber = 100;
  let newSalesNumber = salesNumber + 1;

  console.log("Titel: " + title);
  console.log("Author: " + author);
  console.log("Rating: " + newRating);
  console.log("salesNumber: " + newSalesNumber);
}

changeBookData();
console.log(" ");
/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log("Titel: " + title);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("salesNumber: " + salesNumber);
}

logBookData();
console.log(" ");

// --^-- write your code here --^--
function increaseSales() {
  let title = "JavaScript für Dummies";
  let author = " Vander Veer, Emily A.";
  let rating = 5;
  let salesNumber = 100;
  /*let actualSalesNumber = salesNumber++;*/

  console.log("Titel: " + title);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  salesNumber++;
  salesNumber++;
  console.log("Sales: " + salesNumber);
}

increaseSales();
