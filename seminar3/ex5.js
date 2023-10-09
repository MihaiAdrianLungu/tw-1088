function calculate(factor, ...nums) {
    const sum = nums.reduce((acc, el) => acc + el, 0);

    return sum * factor;
}

console.log(calculate(5, 1, 2, 3, 4, 5, 6))