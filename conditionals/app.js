// 1 example 
/*
let hasMembership = false
let signedIn = true

if(hasMembership === true){
    console.log("show video the user");
}
else if(signedIn === true){
    console.log("tell usert to upgrade their account");
    
}
else{
    console.log("tell user to login in");
    
}

*/

// 2 example

/*
let age = 19

if(age > 18){
    console.log(`You are ${age} years , old you may enter the club`);
}else if(age === 18){
    console.log("You just turned 18, welcome");
}else{
    console.log(`you are ${age} years old, get outta here`);
}

*/


//Comparison Operator

/*
&& check if its left and right side are true

true && true == true
true && false == false
false && true == false 
false && false == false
*/

//
let age = 19;
let hasId = false;

// if(age >= 18 && hasId === true){
//     console.log("You can entered the club")
// }else{
//     console.log("you can not entered the club");
// }

//or logical op

if(age >= 17 || hasId === true){
    console.log("you may entered the club")
}