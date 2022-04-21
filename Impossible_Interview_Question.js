// Given I have an array of numbers (I.e. [14, 6, 10]), how can I find possible combinations/pairs
// that can add up to a given target value?
// Example:  [14, 6, 10], I'm looking for a target value of 40, my expected output would be:
// 10 + 10 + 6 + 14
// 14 + 14 + 6 + 6
// 10 + 10 + 10 + 10


function getSum(array, sum) {
    function iter(index, temp) {
        var s = temp.reduce((a, b) => a + b, 0);
        if (s === sum) result.push(temp);
        if (s >= sum || index >= array.length) return;
        iter(index, temp.concat(array[index]));
        iter(index + 1, temp);
    }

    var result = [];
    iter(0, []);
    return result;
}

console.log(getSum([14, 6, 10], 40));



// function getSum(array, sum) {
//     function iter(index, temp) {
//         var s = temp.reduce((a, b) => a + b, 0);
//         if (s === sum) result.push(temp);
//         if (s >= sum || index >= array.length) return;
//         iter(index, temp.concat(array[index]));
//         iter(index + 1, temp);
//     }

//     var result = [];
//     iter(0, []);
//     return result;
// }

// console.log(getSum([14, 6, 10], 40));

