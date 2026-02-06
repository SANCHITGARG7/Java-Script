
//For loop
console.log("For Loop:");

for(let i=1;i<=5;i++){
    console.log("SnchitGarg")
}


//While Loop
console.log("While Loop:");

let numb = 1;
while(numb < 10){
    console.log("numb",numb);
    numb++;
}


// do while Loop
console.log("Do While Loop:");

let i=0;
do{
    console.log("number",i);
    i++;
}while(i<=7);


// for of Loop

let name = "Sanchit Garg"
let size = 0
for(let i of name){
    console.log("i= ",i);
    size++;
}

console.log("Size =", size);

// For In Loop

let student = {
    name: "sanchit",
    ge : 20,
    CGP : 7.88,
    IsPass : true
}
for (let key in student){
    console.log("key :", key + ":", student[key]);
}