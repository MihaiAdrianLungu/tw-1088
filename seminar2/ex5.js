const calculateAvg = (arr) => {
    let sum = 0;

    for (let el of arr) {
        sum += el;
    }

    return sum / arr.length;
}

console.log(calculateAvg([1,2,3]))