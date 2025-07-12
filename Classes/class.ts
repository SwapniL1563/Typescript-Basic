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


// abstract class is class that can't be instantiated directly , act as base class to define common  prop in sub class using abstract method

abstract class Animal {
    abstract makeSound():void; // abtract class

    move():void{
        console.log("Animal");
    }
}

// let Dog = new Animal() // can't create an obj from abstract class directlty

class Dog extends Animal{
    // need to be define abstract methods
    makeSound(): void {
        console.log("Bhow-Bhow")
    }

    hasLeg():void{
        console.log("4")
    }
}

// create an object from inherited class
let d = new Dog();
d.makeSound(); 


class Cat extends Animal{

    makeSound(): void {
        console.log("Meow-Meow")
    }
}

