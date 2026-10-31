// Lab3.1.1
"" + 1 + 0; // "10"
"" - 1 + 0; // "-10"
true + false; // true
!true; // false
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // "45px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // Nan
" -9 " + 5; // " -4"
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // Nan
undefined == null; // true
undefined === null; // false
" \t \n" - 2; // undefined

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(!true); // false
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(" -9 " + 5); // " -9 5"
console.log(" -9 " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(" \t \n" - 2); // -2

// Lab3.1.2
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;

//let less than2 = thirty < four is an icorrect statement because it is comparing a value of "30" as less than a value of "4".
//To correct this statement, we need to swap the four and thirty values and change the less than operator to a division operator. The correct statement would be: let lessThan2 = four / thirty.

// Lab3.1.3
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

//("0") will print because it is a true statement.
//(-1) will print because it is a true statement.
//(1) will print because it is a true statement.

// Lab3.1.4
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

//Rewrite
let a = 5,
  b = 10;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

console.log(`${a} === ${b} ? ${a === b}`);
console.log(`${a} !== ${b} ? ${a !== b}`);
// when changing the numbers of a and b to 5 and 10 respectively, the output changed to "5+10 is greater than 10".

// Lab3.1.5
function getGreeting(name) {
  return "Hello " + name + "!";
}

//Rewrite
const getGreeting = function (name) {
  return "Hello " + name + "!";
};
const getGreeting = (name) => `Hello ${name}!`;

// Lab3.1.6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers === 5)
      return "You seem a decent fellow. I hate to kill you.";
    else return "You killed my father. Prepare to die.";
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);

//Lab3.1.7
const basketballGame = {
  score: "0",
  foul: "0",

  freeThrow() {
    console.log(++this.score);
    return this;
  },

  basket() {
    console.log((this.score += 2));
    return this;
  },

  threePointer() {
    console.log((this.score += 3));
    return this;
  },

  foulCounter() {
    console.log(this.foul);
    return this;
  },

  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },

  fullTime() {
    console.log("The final score is " + this.score);
    console.log("The number of fouls is " + this.foul);
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foulCounter()
  .halfTime()
  .fullTime();

//Lab3.1.8
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

for (let key in sydney) {
  console.log(key + ":" + sydney[key]);
}

//NewCity
const phoenix = {
  name: "Phoenix",
  population: 1_610_000,
  state: "AZ",
  founded: "25 February 1881",
  timezone: "Mountain Standard Time",
};

for (let key in phoenix) {
  console.log(key + ":" + phoenix[key]);
}

//Lab3.1.9
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = ["Bingo"];
let cat1 = { name: "Fluffy", breed: "Siberian" };
let moreSports = ["Hockey", "Cricket", "Volleyball"];
let dog2 = ["Bingo"];
let cat2 = { name: "Fluffy", breed: "Siberian" };

moreSports.push("Baseball", "Basketball", "Handball");
moreSports.unshift("Football");

dog2.push("Flack");
cat1.name = cat1.title;
delete cat1.name;

console.log(cat1);

//3.1.9."D"
/*The teamSports variables changed with adds to the moreSports varibles since they have been set to an equal comparrison expression.

dog1 had the an additional name "pushed" into the array.

cat1 lost the "name" property after it was changed to title and then deleted.*/

//Lab3.1.10
//A,B,C,
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => this.age >= 16;
}

let person1 = new Person("Paul", 21);

let person2 = new Person("Tim", 30);

console.log(person1);
console.log(person2);

//3.1.10.D
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}

let person1 = new PersonClass("Paul", 12);
let person2 = new PersonClass("Tim", 30);
let person3 = new PersonClass("Steve", 100);

console.log(person1);
console.log(person2);
console.log(person3);

//3.1.10.E
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age >= 16;
  }
}

let person1 = new PersonClass("Paul", 12);
let person2 = new PersonClass("Tim", 30);
let person3 = new PersonClass("Steve", 100);

console.log(person1);
console.log(person1.canDrive());
console.log(person2);
console.log(person2.canDrive());
console.log(person3);
console.log(person3.canDrive());

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => this.age >= 16;
}

let person1 = new Person("Paul", 12);

let person2 = new Person("Tim", 30);

console.log(person1);
console.log(person1.canDrive());
console.log(person2);
console.log(person2.canDrive());
