function sum(num:number): number{
    return num + 2;
    // return "swap";
}

sum(30);

function getUpper(val:string) {
    return val.toUpperCase();
}

getUpper("singer");

function signup(name:string,age:number,isLogged:boolean){
    return name.toLowerCase() + "and age is: " + age
}

console.log(signup("Swapnil",22,true));

const getLogin = (name:string,age:number): string =>  {
       return name;
}

// void -> doesn't return anything
const say = (name:string) : void => {
    console.log("Hi");
}

// never - doesn't return any value
const handleError = (name:string) : never => {
      throw new Error();
}

export {}