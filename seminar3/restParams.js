function sum(initialValue, ...nums) {
    console.log(nums);

    const reducedSum = nums.reduce((acc, el) => acc + el, initialValue)

    return console.log(reducedSum)
}

sum(100, 1, 2, 3, 4)