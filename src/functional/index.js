import { compose, pipe } from "lodash/fp";

function sayHello() {
  return "Hello World";
}

let fn = sayHello;

fn();

let input = "    JavaScript     ";
let output = "<div>" + input.trim() + "</div>";

// trim
const trim = (str) => str.trim();

// HERE WE CAN DO
// wrapInDiv
const wrapInDiv = (str) => `<div>${str}</div>`;
// wrapInSpan
const wrapInSpan = (str) => `<span>${str}</span>`;

// Curring method
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

// Result witout loDash
// const result = wrapInDiv(toLowerCase(trim(input)));

// Using loDash

// compose combine more functions
// is a Higher order function
const transform = compose(wrap, toLowerCase, trim);
transform(input);

// pipe
const transformWithPipe = pipe(trim, toLowerCase, wrap("span"));

const rezultat = transformWithPipe(input);

console.log("rez", rezultat);

console.log("<--------------------- Objects ---------------------->");
// Updating objects
const person = {
  name: "John",
  address: {
    country: "Romania",
    city: "Bucharest",
  },
};
// const updated = Object.assign({}, person, { name: "Celtic", age: 45 });
// Beter way with spread operator with deep copy
const updatedPerson = {
  ...person,
  address: {
    ...person.address,
    city: "Focsani",
  },
  name: "Gigel",
};

console.log(person);
console.log(updatedPerson);
console.log("<--------------------- Array ---------------------->");

const numbers = [1, 2, 3];
console.log("numbers", numbers);

// Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log("added", added);

// Removing
const removed = numbers.filter((n) => n !== 2);
console.log("removed", removed);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
console.log("updated", updated);
