// another way to declare an object type

interface User {
    readonly id:string
    name: string,
    age:number,
    email?:string,
    startTrail():string,
    getCoupon(coup:string):number
}

const swap : User = {id:"101", name:"swapnil",age:20,
    startTrail: () => {
        return "Started"
    },
    getCoupon: (id:string) => {
        return 20
    }
}

// types vs interface

// interface can be reopened,extends and habve inheritance while type can't

interface User {
    readonly id:string
    name: string,
    age:number,
    email?:string,
    startTrail():string,
    getCoupon(coup:string):number
}

// re-opening of interface

interface User {
    role:string,   // adding new field 
}

const swap : User = {id:"101", name:"swapnil",age:20,
    role:"admin",
    startTrail: () => {
        return "Started"
    },
    getCoupon: (id:string) => {
        return 20
    }
}

// inherited

interface User {
    readonly id:string
    name: string,
    age:number,
    email?:string,
    startTrail():string,
    getCoupon(coup:string):number
}

interface Person extends User {
    isActive:boolean,
}

const person: Person = {
    id:"101", name:"swapnil",age:20,
    role:"admin",
    startTrail: () => {
        return "Started"
    },
    getCoupon: (id:string) => {
        return 20
    },
    isActive:false
}


// interface imp
interface TakePhoto {
    photo:string,
    format:string,
    _id:number
}

interface Story {
    createStory():string
}

class Instagram implements TakePhoto , Story {
    constructor(
        public photo:string,
        public format:string,
        public _id:number,
        public quality:string,
    ){ }

    createStory(): string{
      return "story created"
    }
}




export {}