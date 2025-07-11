var score;
score = 20;
score = "A";
var swap = { name: "Swap", id: 20 };
swap = { adminName: "Swap", id: 20 };
// function getting diff type of val
function getDbId(id) {
    console.log("DB ID is ".concat(id));
}
getDbId(20);
function getDbIds(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id + 2;
}
getDbIds(20);
// union in array 
var data = [1, 2, "3", false];
data.push(20);
