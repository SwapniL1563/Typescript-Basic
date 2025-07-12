// generic allow us to create re-usable components that work with any - but preserves type safety
// eg. 1
function identityOne(val) {
    return val;
}
// eg.2 - any
function identityTwo(val) {
    return val;
}
// eg.3 - generic
function identityThree(val) {
    return val;
}
// identityFour<Bottle>({})
identityThree("boy");
identityThree(2);
// generic in  arrays
function getSerachProducts(products) {
    var index = 2;
    return products[index];
}
var getMoreSearchProducts = function (products) {
    var index = 2;
    return products[index];
};
