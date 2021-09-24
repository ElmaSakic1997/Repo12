// Only change code below this line
function sumFibonacci(num) {
    var array = [1, 1];
    if (num === 1) {
        return 1;
    } else if (num < 1) {
        return 0;
    } else {
        for (var i = 2; i < num; i++) {
            array[i] = array[i - 2] + array[i - 1];
        }
        var oddNumbers = [];
        for (i = 0; i < num; i++) {
            if (array[i] <= num && array[i] % 2 != 0) oddNumbers.push(array[i]);
        }
        var sum = 0;
        for (var i = 0; i < oddNumbers.length; i++) {
            sum += oddNumbers[i];
        }
        return sum;
    }
}
// Only change code above this line

console.log(sumFibonacci(1)); //Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;