// tuple => special type of order where order and length m atters

let data:[string, number];

data = ["swap",20];

// rgb val

let rgb: [number,number,number];

rgb = [255,203,100];

// bad behaviour

type Users =  [string , number];

const newUser : Users = [ "SWAP@gmail.com" , 20]

newUser[0] = "hc.com"
newUser.push(true);


export {}