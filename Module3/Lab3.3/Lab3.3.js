//Lab3.3.1
function makeCounter() {
  let currentCount = 0;
  return function () {
    startFrom = 5;
    currentCount++;
    incrementBy = 3;
    console.log(startFrom + currentCount + incrementBy);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1();
counter1();

function makeCounter2() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter2 = makeCounter2();
counter2();
counter2();

//Lab3.3.2
const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
let cancelTimeoutId = setTimeout(delayMsg, 12000, "#5: Delayed by 12000ms");
clearTimeout(cancelTimeoutId);

// Answer A) The messages will be printed in the following order: "#4: Not delayed at all", "#3: Delayed by 0ms", "#2: Delayed by 20ms", "#1: Delayed by 100ms". "delayMsg" is immediate since it does not use a delay, then it goes by the higherarchy of the setTimeout delays.

//Lab3.3.3
function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}
printMe = debounce(printMe);
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

function debounce(printMe) {
  let timeoutId;
  let ms = (setTimeout.length = 2000);
  let msg = "";
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(printMe, ms);
  };
}

//Lab3.3.4
//function printFibonacci() {
//  let a = 0,
//    b = 1;
//  console.log(a);
//  console.log(b);
//  setInterval(function () {
//    let finish = a + b;
//    console.log(finish);
//    a = b;
//    b = finish;
//  }, 1000);
//}
//printFibonacci();

function printFibonacciTimeouts() {
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);
  function printNext() {
    let finish = a + b;
    console.log(finish);
    a = b;
    b = finish;
    let limit = 100;
    if (finish >= limit) return;
    setTimeout(printNext, 1000);
  }
  setTimeout(printNext, 1000);
}
printFibonacciTimeouts();

//Lab3.3.5
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
let clone = Object.assign({}, car);
clone.year = 2024;
clone.model = "Taycan";

car.description();
//setTimeout(car.description, 200); this will not work because `this` will not call the `car` object inside the function.
setTimeout(() => car.description(), 200);
setTimeout(() => clone.description(), 200);

//c) The delayed description uses the original year because the new year value has not been overwritten or called. The previous year in the `car` object is pulled instead.
//D)
const boundCar = car.description.bind(car);
setTimeout(boundCar, 500);

//E)
setTimeout(() => car.model(), 500);

//Lab3.3.6
function multiply(a, b, c, d) {
  console.log(a * b * c * d);
  //const result = multiply.apply(this, arguments);
  //console.log(result);
  //return result;
}

function delay(ms, func) {
  setTimeout(func, ms);
}

delay(500, () => multiply(5, 5, 5, 5));

//Lab3.3.7
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
class PrecisionClock {
  constructor(prefix, precision) {
    this.prefix = prefix;
    this.precision = precision;
  }
  display() {
    let date = new Date();
    let [hours, mins, secs, ms] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (ms < 100) ms = "0" + ms;
    if (ms < 10) ms = "0" + ms;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}.${ms}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

class AlarmClock {
  constructor(prefix, alarmTime) {
    this.prefix = prefix;
    this.alarmTime = alarmTime;
  }
  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    if (`${hours}:${mins}` === this.alarmTime) {
      console.log("Wake Up!");
      this.stop();
      return;
    }
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

//const myClock = new PrecisionClock("my clock:", 1000 );
//myClock.start();
const myAlarm = new AlarmClock("my alarm:", "17:10");
myAlarm.start();

//Lab3.3.8
function orderItems(itemName, ...rest) {
  return `Order placed for: ${itemName} ${rest.join(", ")}`;
}
function validateStringArg(func) {
  try {
    return function (arg, ...rest) {
      if (typeof arg !== "string") {
        throw new Error("Argument must be a string");
      }
      return func(arg, ...rest);
    };
  } catch (error) {
    console.error(error.message);
  }
}

const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch", "iPhone", "MacBook"));
//console.log(validatedOrderItem(123));

//Lab3.3.9
function randomDelay(min, max) {
  if (min === undefined) min = 1;
  if (max === undefined) max = 20;
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    setTimeout(resolve, delay);
  });
  if (delay === even) {
    return true;
  } else {
    return false;
  }
}

randomDelay().then(() => console.log("There appears to have been a delay."));

//Lab3.3.10
//import fetch from "node-fetch";
//globalThis.fetch = fetch;
//function fetchURLData(url) {
//  let fetchPromise = fetch(url).then((response) => {
//    if (response.status === 200) {
//      return response.json();
//    } else {
//      throw new Error(`Request failed with status ${response.status}`);
//    }
//  });
//  return fetchPromise;
//}
//fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//  .then((data) => console.log(data))
//  .catch((error) => console.error(error.message));

import fetch from "node-fetch";
globalThis.fetch = fetch;
const asyncFetchURLData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
};
asyncFetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
