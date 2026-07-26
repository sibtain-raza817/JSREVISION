const promiseOne = new Promise ((res, rej)=>{
    setTimeout(() =>{
        console.log("Async task is compelete");
        res();
    }, 1000)
});

promiseOne.then(function(){
    console.log("promise consumed");
    
})