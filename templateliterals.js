// Temeplate Literals

let specialstring = `kon banega don`
console.log(specialstring);
typeof(specialstring);


//How to TL is used

let obj = {

    item : "pen",
    price : 10,
}

let output = `The object is ${ obj.item } and price is ${obj.price} rupees`;
console.log(output);