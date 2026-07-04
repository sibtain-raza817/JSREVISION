// object in js 

let obj = [{
    userEmail : "example@gmail.com",
    password : "test123",
    userName : "raza",
    userDiscord : "exampleDiscord",
    userSubscription : "VIP+"
}]

// console.log(obj[0].userEmail);


//Sign Up User Challenge 

function signUp(email, password, name, discord, subscription, lessonsCompleted) {

    let user = {
        email : email,
        password : password,
        name : name,
        discord : discord,
        subscription : subscription,
        lessonsCompleted : lessonsCompleted
    }
    obj.push(user)
}

signUp("rahul@gmail.com", "test1234", "Rahul", "rahul", "VIP+", [1, 2]);

console.log(obj);
