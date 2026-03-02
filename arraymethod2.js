// Imp methods

let numbs = [1,2,3,4,5];

// 3. Map method


let arr = numbs.map((value) =>{
   return value;
});

console.log(arr);

// 2. Filter Method


let arr1 = numbs.filter((val)=>{
 return val>2;
});
console.log(arr1);

// 3. Reduce Method


const sum = numbs.reduce((res,curr)=>{
    return res > curr ? res : curr ;
});
console.log(sum);