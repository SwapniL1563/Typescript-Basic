class User {
    public name:string
    email:string
    private readonly city:string = ""
    constructor(name:string,email:string){
        this.name = name;
        this.email = email;
        this.city
    }
}

// creating an object
const swapnil = new User("swap","swap@gmail.com");

// better way
class User1 {
    constructor(
    public name:string,
    public email:string){
        
    }
}