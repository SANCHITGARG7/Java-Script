/*console.log("This is the first JavaScript file.");
console.log("Sanchit Garg");
var age=20;
let b = 20;
let c = 30;
console.log("Age is " + age);
let name="Sanchit Garg";
console.log("My name is " + name + " and my age is " + age + ".");
console.log('name is ' + name + ' age is ' + age);
{
    let city="New Delhi";
    console.log("I live in " + city);

}
// console.log("I live in " + city); // This will give an error because city is block scoped
{
    var city="India";
    console.log("I live in " + city);
}

const student = {
    Name:"sanchit Garg",
    Age: 20,
    CGPA: 9.1,
    ispassed: true,
};

console.log ("Name of Student is : " + student.Name + " Age of Student is : " + student.Age + " CGPA is " + student.CGPA );
console.log("Is student passed? " + student.ispassed);
typeof(student);

console.log(" b+c =",b+c );
console.log(" b*c =",b*c );
console.log(" b-c =",b-c );
console.log(" b/c =",b/c );

 // conditional statements

 if (age > 18) {
    console.log("You are eligible to vote.");
 }

 let numb = prompt("Enter a grades: ");
 /* if (numb%5===0 ){
    console.log(numb, "The number is divisible by 5.");
 }
 else {
    console.log(numb, "The number is not divisible by 5.");
 }


    if (numb >= 80 && numb <= 100) {
        console.log(numb, "The Grade is A");
    }
    else if (numb <= 89 && numb >= 70) {
        console.log(numb, "The Grade is B");
    }
    else if (numb <= 69 && numb >= 60) {
        console.log(numb, "The Grade is C");
    }
    else if (numb <= 59 && numb >= 50) {
        console.log(numb, "The Grade is D");
    }  
    else {
        console.log(numb, "The Grade is F");
    }

*/

// loops

// 1 for loop

for (let numb = 1; numb <= 6; numb++) {
    console.log("sanchitgarg");
}


let sum = 0;
let n = prompt("enter value of n");
for(let i = 1; i<=n; i++){
    sum += i;
}
console.log("sum",sum);


// while
let i=1;
while(i<=5){
    console.log(i)
     i++;
}

