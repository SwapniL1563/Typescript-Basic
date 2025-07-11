class User {
    name:string
    email:string
    readonly city:string = ""
    constructor(name:string,email:string){
        this.name = name;
        this.email = email;
    }
}

// creating an object
const swapnil = new User("swap","swap@gmail.com");

