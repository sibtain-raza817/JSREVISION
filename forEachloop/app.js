// let coding = ["python", "cpp", "java", "ruby", "js"];


// let values = coding.forEach((items)=>{
//     console.log(items);
//     return items
// })

// console.log(values);
/*
forEach does not return any value
python
cpp
java
ruby
js
undefined
*/

//but filter method return new array means return somthings

const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.filter((num) => num > 5);

// return karna padega agr is trah likhoge tab
// agr curly bracket laga diya means : you have to return 
let nums = myNums.filter((num)=>{
    return num > 6;
})
console.log(nums);
