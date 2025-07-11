let score: number | string;
score = 20;
score = "A";

// types in union 
type User = {
    name: string,
    id: number
}

type Admin = {
    adminName: string,
    id:number
}

let swap:User | Admin = { name:"Swap" , id : 20}

swap = { adminName:"Swap" , id : 20}

// function getting diff type of val
function getDbId(id:number | string) {


    console.log(`DB ID is ${id}`)
}

getDbId(20);

function getDbIds(id:number | string) {
   if(typeof id === "string") 
   {
    return id.toLowerCase()
   }

   return  id + 2;
}

getDbIds(20);

// union in array 
let data: (number | string | boolean)[] = [1,2,"3",false];
data.push(20);

// fixed data
let gender: "male" | "female";

gender = "male";
// gender = "none"