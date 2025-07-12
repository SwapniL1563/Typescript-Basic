class User {
    public name:string
    protected _courseCount = 1; 
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

// inheritance
class SubUser extends User {
    isFamily:boolean = true
    changeCount() {
        this._courseCount = 2;
    }
}
