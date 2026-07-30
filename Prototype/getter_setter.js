class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;   // Fixed
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value;
    }
}

const raza = new User("user@gmail.com", "abcd");

console.log(raza.password);
console.log(raza.email);