class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Student extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const raza = new Student("Raza", "raza@gmail.com.com", "12345")

raza.logMe()
const ritesh = new User("Ritesh")

ritesh.logMe()

console.log(raza instanceof User);