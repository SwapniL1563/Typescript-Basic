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

// eg.4 
interface Bottle {
    brand:string,
    type:number
}
// identityFour<Bottle>({})

identityThree("boy");
identityThree(2);

// generice 