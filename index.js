// Given a year, report if it is a leap year.
const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2014));
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));
console.log(isLeapYear(2017));
console.log(isLeapYear(2018));
console.log(isLeapYear(2019));

// Write a JavaScript Program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objectsEqual = (a, b) => Object.keys(a).every((key) => b[key]);

console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));
console.log(objectsEqual(objB, objC));

// Write a JavaScript Program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.

// Example:
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza

const parseCSV = (csvString) =>
  csvString.split("\n").map((row) => row.split(","));

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(parseCSV(str));

// Write a JavaScript Program to generate a random hexadecimal color code.
const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () =>
  "#" + Array.from({ length: 6 }).map(getRandomHexNumber).join("");

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());

// Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i])) {
      return false;
    }   
  }
  return true;
};

console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 0));
console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 3));

/* Write a JavaScript Function that returns a passed string with letters in alphabetical order.
 Example string: 'webmaster'
 Expected Output: 'abeemrstw'
*/
const alphabeticalOrder = (str) => 
   str.split('').sort((a,b) => a > b ? 1 : -1)
   .join('');

console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('javascript'));

/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. */
const countLetters = (
    str, letters = ['a','e','i','o','u']) => 
    str
    .split('')
    .filter(s => letters.indexOf(s) > -1)
    .length;
console.log(countLetters('abcde'));
console.log(countLetters('abcde', ['c']));

// Write a JavaScript Function to convert an amount to coins.
// Example input: 46 and possible coins 25, 10, 5, 2, 1
// Output: 25, 10, 10, 1

function convertCoins(amount, coins = [25, 10, 5, 2, 1]) {
    let totalCoins = [];
    let j = 0;

    while (amount > 0) {
        if (amount >= coins[j]) {
            amount -= coins[j];
            totalCoins.push(coins[j]);
        }

        if (amount < coins[j]) {
            j++;
        }
    }
    return totalCoins;
}
console.log(convertCoins(46));

// Write a JavaScript Program to extract unique characters from a string
const getUniqueChar = (str) => 
   str.split('').filter(
       (item, index, arr) =>
          arr.slice(index + 1).indexOf(item) === -1
   );

console.log(getUniqueChar('aaaabbccc'));

// Write a JavaScript function to find the first not repeated character.
// Example String: 'abacddbec'
// Expected Output: 'e'

firstNotRepeatedChar = str => {
    return str
        .split('')
        .filter((value, index, array) => array.indexOf(value) === array.lastIndexOf(value))[0];
}

console.log(firstNotRepeatedChar('abacddbec'));