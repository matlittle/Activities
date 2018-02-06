module.exports = function(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error;
    } else {
        return a * b;
    }
}
