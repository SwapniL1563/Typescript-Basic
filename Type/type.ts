type User = {
    readonly id:string // readonly
    name : string,
    age: number,
    isActive:boolean,
    email?:string // optional
}

function getUser(user:User):User{
    return {id:"123",name:"swap",age:22,isActive:true}
}

getUser({name:"swap",age:22,isActive:true,id:"123"})