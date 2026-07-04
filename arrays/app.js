
// TRADITIONAL WAY TO STORE THE ITEMS 
/*
let items1 = "Apples";
let items2 = "Banana";
let items3 = "Kiwi";
let items4 = "Eggs";

console.log(items1, items2, items3, items4);

*/

// how arrays short this problem :- array means store the items in a single varibale with same  data types of value. 
/*
let items = ["Apples", "Banana", "Kiwi", "Eggs"];

// first element of array 
console.log(items[0]);

//Lar elememnt od array
console.log(items[items.length-1]);

//Add element in array 
items.push("Bread");

console.log(items); //It will updated array values 
// Js run the code line  by line 

let array = [18,16,15,20,21]
//[10,20]
// let filteredArray = array.filter((ele) =>{
//     console.log(ele);
    
//     if(ele >= 18){
//         return true;
//     }
// })

//same with short
let Adult = array.filter((ele) => ele >= 18)
console.log(filteredArray)

*/

//Loop in array

let array = [18,16,15,20,21];
let adult = [];

for(let i=0; i<array.length; i++){
    //console.log(array[i]);
    if(array[i] >= 18){
        //var result = adult.push(array[i]);
        adult.push(array[i]); 
    }
}

console.log(adult);
