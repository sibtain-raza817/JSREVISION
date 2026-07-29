// class User  {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abcd`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const raza = new User("Raza", "raza@gmail.com", "1234567");

// console.log(raza.encryptPassword());
// console.log(raza.changeUsername());

// behind the scene :- what happening 


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const ansh = new User("Ansh", "ansh@gmail.com", "123");
console.log(ansh.encryptPassword());
console.log(ansh.changeUsername());
