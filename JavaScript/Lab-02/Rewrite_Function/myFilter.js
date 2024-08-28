Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArr = arr.myFilter(
    function(element) {
        return element % 2 === 0;
    }
);

console.log(filteredArr); // [2, 4, 6, 8, 10]