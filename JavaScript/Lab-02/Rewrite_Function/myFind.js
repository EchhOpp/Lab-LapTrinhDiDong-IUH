Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const testMyFind = arr.myFind(
    function(element) {
        return element > 5;
    }
);

console.log(testMyFind); // 6