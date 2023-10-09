const arr = [ 1, 2, 3, 4, 5];
let newArr = []

const forEachArr = arr.forEach(el => {
    newArr.push(el * 2);
    // console.log(el)
})

const mapArr = arr.map(el => {
    // console.log(el)

    return el * 2;
})

console.log(forEachArr)
console.log(mapArr)