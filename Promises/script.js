const promiseOne = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async task is compelete");
        res();
    }, 1000)
});
promiseOne.then(function () {
    console.log("promise consumed");

})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async code 2");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Async code 2 resolved");

})

new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async code 3 ");
        res({ username: "Sibtain", password: "12345678" });
    }, 1000)
}).then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        console.log("promis 4 compelete");
        if (!error) {
            resolve({ username: "Ritesh", password: "123" })
        }else{
            reject("ERROR: somthing went wrong.");
        }
    })
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})