Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const testSome = arr.mySome(
    function(element) {
        return element % 2 === 0;
    }
);

console.log(testSome); // true