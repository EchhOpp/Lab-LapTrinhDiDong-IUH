Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];

const testMap = arr.myMap(
    function(element) {
        return element * 2;
    }
);

console.log(testMap); // [2, 4, 6, 8, 10]