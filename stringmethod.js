// This showcase some common string methods not all

// string to UpperCase 

let str = "sanchit";
let str1 = str.toUpperCase();

console.log(str1);


// String to LowerCase

let str2 = "BADMOSH";
let str3 = str2.toLowerCase();

console.log(str3);

// Trim  whitespaces in string

let str4 = "    Jon Banega Don           "
let str5 = str4.trim();

console.log(str5);

// return parts of string 

let str6 = str.slice(0,5);
console.log(str6);

// Concatinate 2 string

let str7 = str1.concat(str2);
console.log(str7);

// replacing 2 values 

let str8 = str4.replace("Jon","Don");
console.log(str8);

// Find any char in any index of string 

let str9 = str1.charAt(3);
console.log(str9);
