// chaining in map, filter

// let myNums = [1,2,3,4,5,6,7,8,9,10];

// let result = myNums
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => {return num >= 20});

// console.log(result);

// Reduce method

const array = [1,2,3,4,5,6,7,8];

const sumOfTotalNum = array.reduce((acc, currVal) =>{
    console.log(`AccVal: ${acc}, CurrVal: ${currVal}`);
    
    return acc + currVal
}, 0)  // initilization of first value which will go in acc 
