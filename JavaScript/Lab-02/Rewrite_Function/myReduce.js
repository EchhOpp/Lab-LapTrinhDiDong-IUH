Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (accumulator === undefined) {
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

const arr = [1, 2, 3, 4, 5];

const sum = arr.myReduce(
    function(accumulator, element) {
        return accumulator + element;
    },
    0
);

console.log(sum); // 15