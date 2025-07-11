const User = {
    name: "swapnil",
    age:20
}

function getUser({name:string,isActive:boolean}) {

}
// getUser({name:"swap",isActive:true}); 

// bad behavior
let newUser = {name:"swap",isActive:true,email:"swap@gmail.com"}
getUser(newUser); 

function getCourse():{name:string,price:number}{
   return {name:"web d",price:500}
}

export {}