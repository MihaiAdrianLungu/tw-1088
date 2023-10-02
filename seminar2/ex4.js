const combineArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return [];
    }

    let newArray = [];

    for(let i = 0; i < arr2.length; i++) {
        newArray.push(arr1[i]);
        newArray.push(arr2[i]);
    }

    return newArray;
}

console.log(combineArrays([1,2,3], ['a', 'b', 'c']))