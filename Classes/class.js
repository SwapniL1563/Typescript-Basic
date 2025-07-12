var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email) {
        this._courseCount = 1;
        this.city = "";
        this.name = name;
        this.email = email;
        this.city;
    }
    return User;
}());
// creating an object
var swapnil = new User("swap", "swap@gmail.com");
// better way
var User1 = /** @class */ (function () {
    function User1(name, email) {
        this.name = name;
        this.email = email;
    }
    return User1;
}());
// inheritance
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCount = function () {
        this._courseCount = 2;
    };
    return SubUser;
}(User));
// abstract class is class that can't be instantiated directly , act as base class to define common  prop in sub class using abstract method
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Animal");
    };
    return Animal;
}());
// let Dog = new Animal() // can't create an obj from abstract class directlty
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // need to be define abstract methods
    Dog.prototype.makeSound = function () {
        console.log("Bhow-Bhow");
    };
    Dog.prototype.hasLeg = function () {
        console.log("4");
    };
    return Dog;
}(Animal));
// create an object from inherited class
var d = new Dog();
d.makeSound();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow-Meow");
    };
    return Cat;
}(Animal));
