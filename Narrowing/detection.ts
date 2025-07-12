function detectionID(id:string | null) {
    if(!id)  {   // id is null
       console.log("Plz provide ID!");
       return;
    }


    // db operations
    return id.toLowerCase();
}

const myId = detectionID("1010");
console.log(myId);


function printAll(strs:string |  string[]  | null){
    if(strs){
        if( typeof strs === "object") {
        for(const s of strs) {
            console.log(s);
        }
        } else if(typeof strs === "string") {
        console.log("String");
        }
    }
}

// in - operator to narrow down type
interface User {
    name:string,
    age:number
}

interface Admin {
    name:string,
    age:number,
    isAdmin:boolean
}

function getInfo(acc: User | Admin) {
    if("isAdmin" in acc) { // narrow down the type
        return acc.isAdmin;
    }
}

// instanceOf - to narrow down  types that can be use with new(eg.date)
function logVal(x:Date | string) {
    if(x instanceof Date){
        return x.toUTCString()
    };
}

// discriminated union 


