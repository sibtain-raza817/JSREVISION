// chaining in map, filter

let myNums = [1,2,3,4,5,6,7,8,9,10];

let result = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => {return num >= 20});

console.log(result);
