//Oeprator.js

//given Values
let a = 10;
let b = 5;
let c = 15;
let d = 20;
let e = '5';
console.log("Given values are a =", a, "b =", b, "c =", c, "d =", d);

// 1) Arithmetic Operators
console.log("Arithmetic Operators:");

console.log("Addition: a+b", a+b); // Addition
console.log("Subtraction; b-c", b-c); // Subtraction
console.log("Multiplication; a*b", a*b); // Multiplication
console.log("Division: a/c", a/c); // Division
console.log("Modulas: a%b", a%b); // Modulus
console.log("Exponentiation: a**b", a**b); // Exponentiation
console.log("Increment of ++a:", ++a); // Increment
console.log("Decrement of --b:", --b); // Decrement

// 2) Assignment Operators
console.log("Assignment Operators:");

d += 5;
console.log('New value ofd:', d); // Add and assign
d -= 5;
console.log("New alue of of d:", d); // Subtract and assign
d *= 2;
console.log("New value of d:", d); // Multiply and assign
d /= 2;
console.log("New value of d:", d); // Divide and assign
d %= 3;
console.log("New value of d:", d); // Modulus and assign
d **= 2;
console.log("New value of d:", d); // Exponentiation and assign

// 3) Comparison Operators
console.log("Comparison Operators:");

console.log("a==b", a==b); // Equal to
console.log("a===b", a===e); // Strict equal to
console.log("a!=b", a!=b); // Not equal to
console.log("a!==b", a!==b); // Strict not equal to
console.log("a>b", a>b); // Greater than
console.log("a<b", a<b); // Less than
console.log("a>=b", a>=b); // Greater than or equal to
console.log("a<=b", a<=b); // Less than or equal to 

// 4) Logical Operators
console.log("Logical Operators:");

console.log("(a==b) && (c>d)", (a==b) && (c>d)); // Logical AND
console.log("(b=2)||(d>b)", (b=2)||(d>b)); // Logical OR
console.log("!(a==b)", !(a==b)); // Logical NOT