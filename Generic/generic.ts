// generic allow us to create re-usable components that work with any - but preserves type safety

// eg. 1
function identityOne(val:boolean | string):boolean| string{
    return val;
}

// eg.2 - any
function identityTwo(val:any) : any {
    return val;
}

// eg.3 - generic
function identityThree<Type>(val:Type) : Type {
    return val;
}

let value = identityThree("swap");
let vlue1 = identityThree(3);

// eg.4 
interface Bottle {
    brand:string,
    type:number
}
// identityFour<Bottle>({})

identityThree("boy");
identityThree(2);

// generic in  arrays
function getSearchProducts <T>(products: T[]):T {
    let index = 2
    return products[index];
}

const getMoreSearchProducts = <T>(products:T):T => {
    let index = 1
    return products[index];
}

let elem = getSearchProducts<string>(["a","b","c"]);

// generic interface
interface Box<T>{
    value:T;
}

let val1: Box<number> = { value : 100};
let val2: Box<string> = { value : "hello" };

// generic class
interface Course{
    name:string,
    type:string
} 

interface Quiz{
    name:string,
    level:string
}

class Sellable<T> {
    private cart:T[] = [];

    addToCart(prod: T){
        this.cart.push(prod);
    }
}

const store1 = new Sellable<number>();
store1.addToCart(20);

const store2 = new Sellable<string>();
store2.addToCart("hi");
