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

let elem = getSearchProducts<string>(["a","b","c"])