//Lab3.2.1
const city = "boston";
console.log(city.charAt(0).toUpperCase() + city.slice(1));

const capital = "phoenix";
console.log(capital.charAt(0).toUpperCase() + capital.slice(1));

//Lab3.2.2
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  }
  return str;
}
console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncate("This text is short", 25));

//Lab3.2.3
const animals = ["Tiger", "Giraffe"];

animals.push("Elephant", "Lion");
animals.unshift("Monkey", "Panda");
animals.sort();

function replaceMiddleAnimal(newAnimal) {
  return animals.splice(3, 1, newAnimal);
}

function findMatchingAnimal(beginsWith) {
  return animals.filter((animal) => animal.startsWith(beginsWith));
}
console.log(replaceMiddleAnimal("Kangaroo"));
console.log(animals);
console.log(findMatchingAnimal("P"));

//Lab3.2.4
const capitalize = function (str) {
  if (typeof str !== "string" || !str.length) return str;
  return str[0].toUpperCase() + str.slice(1);
};

const camelCase = function (cssProp) {
  return cssProp
    .split("-")
    .map((word, index) => {
      if (!index) return word;
      return capitalize(word);
    })
    .join("");
};

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

//ALT
const capitalize = function (str) {
  if (typeof str !== "string" || !str.length) return str;
  return str[0].toUpperCase() + str.slice(1);
};

const camelCase = function (cssProp) {
  return cssProp
    .split("-")
    .map((word, index) => {
      for (const char of word) {
        if (char === "-") return "";
      }
      return capitalize(word);
    })
    .join("");
};

console.log(camelCase("margin-left"));
console.log(camelCase("background-image"));
console.log(camelCase("display"));

//Lab3.2.5
const currencyOperation = (
  float1 = 0.0,
  float2 = 0.0,
  operation = "+",
  numDecimals = 2,
) => {
  let _float1 = float1 * 100;
  let _float2 = float2 * 100;
  let result = 0;

  switch (operation) {
    case "-":
      result = _float1 - _float2;
      break;
    case "*":
      result = _float1 * _float2;
      break;
    case "/":
      result = _float1 / _float2;
    case "+":
    default:
      result = _float1 + _float2;
      break;
  }

  return (result / 100).toFixed(numDecimals);
};

console.log(currencyOperation(0.2, 0.1));
console.log(currencyOperation(0.2, 0.1, "+"));
console.log(currencyOperation(0.2, 0.1, "+", 5));

//A) when using the toFixed method, the result is a string, not a number. The answer is submitted (the fixedTwenty (.20) and fixedTen (.10) are simply pushed together.)

//Lab3.2.6
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const names = ["Alice", "Bob", "Charlie", "Alice", "Bob", "David", "Alice"];

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

console.log(unique(colors));
console.log(unique(testScores));
console.log(unique(names));

//Lab3.2.7
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    id: 4,
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(id) {
  const book = books.find((books) => books.id === id);
  return book ? book.title : null;
}

function getOldBooks(year) {
  return books.filter((books) => books.year < 1950);
}

function addGenre() {
  return books.map((books) => {
    books.genre = "Classic";
    return books;
  });
}

function getTitles() {
  return books.map(
    (books) =>
      books.title +
      " (" +
      books.author.charAt(0) +
      " " +
      books.author.slice(books.author.indexOf(" ") + 1) +
      ")",
  );
}

console.log(getBookTitle(1));
console.log(getOldBooks());
console.log(addGenre());
console.log(getTitles());

//Lab3.2.8
const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "4444444444");

const phoneBookDEF = new Map();
phoneBookDEF.set("Dan", "0412345678");
phoneBookDEF.set("Eleanor", "0432112233");
phoneBookDEF.set("Fred", "0455332211");

const phoneBookComplete = new Map([...phoneBookABC, ...phoneBookDEF]);

function printPhoneBook(contacts) {
  for (const [name, number] of contacts) {
    console.log(`${name}: ${number}`);
  }
}

printPhoneBook(phoneBookComplete);

//Lab3.2.9
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

function topEarner(salaries) {
  return Object.entries(salaries).reduce((top, [name, salary]) => {
    if (!top || salary > top[1]) {
      return [name, salary];
    }
    return top;
  }, null);
}

console.log(sumSalaries(salaries));
console.log(topEarner(salaries));

//Lab3.2.10
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
console.log(today.getMinutes() + " minutes have passed so far today");
console.log(today.getSeconds() + " seconds have passed so far today");

const birthday = new Date("1993-05-28");
console.log(
  "I am " +
    (today.getFullYear() - birthday.getFullYear()) +
    " years " +
    (today.getMonth() - birthday.getMonth()) +
    " months and " +
    (today.getDate() - birthday.getDate()) +
    " days old",
);

function daysInBetween(date1, date2) {
  let day1 = new Date(date1);
  let day2 = new Date(date2);
  return Math.abs(day2.getTime() - day1.getTime()) / (1000 * 60 * 60 * 24);
}

console.log(daysInBetween("2000-01-01", "2026-09-31"));
