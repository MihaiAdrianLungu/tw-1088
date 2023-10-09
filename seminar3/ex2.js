function returnNums(arr, divisor) {
    return arr.filter(el => el % divisor ===0);
}

console.log(returnNums([1,2,3,4], 3));