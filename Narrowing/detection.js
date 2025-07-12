function detectionID(id) {
    if (!id) { // id is null
        console.log("Plz provide ID!");
        return;
    }
    // db operations
    return id.toLowerCase();
}
var myId = detectionID("1010");
console.log(myId);
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log("String");
        }
    }
}
function getInfo(acc) {
    if ("isAdmin" in acc) {
        return acc.isAdmin;
    }
}
