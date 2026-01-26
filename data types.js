//This file include different data types in JavaScript
// Primitives: string, number, boolean, null, undefined, symbol, bigint

// String
let Name = Sanchit;
console.log("My name is" + Name);
typeof(Name);

// Number
let Age = 20;
console.log("My age is " + Age);
typeof(Age);

// Boolean
let ispassed = true;
console.log("Is passed: " + ispassed);
typeof(ispassed);

// Null
let x = null;
console.log("Value of x is:" + x);
typeof(x); // returns 'object' due to a historical bug in JavaScript

// Undefined
let y;
console.log("Value of y is:" + y);
typeof(y);

// Symbol
let a = Symbol("Hello World!");
typeof(a);

// BigInt
let pi = BigInt(9007199254740991);
console.log("Value of pi is: " + pi);
typeof(pi);



// Non-primitives: Object, Array, Function

// Object
const car= {
    Brand:"Royal Enfield",
    Model:"Classic 350",
    Year:2020,
    Nickname: "Cheetah",

};

console.log (car.brand + car.model + car.year + car.Nickname);
typeof(car);