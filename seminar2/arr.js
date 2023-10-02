const arr = [1, 2, 3, 4]

// console.log(arr);
// console.log(arr.length)
// console.log('string'.length)

// arr.push(5);
// console.log(arr)
// arr[0] = 2;
// console.log(arr)

// const shiftedArr = arr.shift();
// console.log(arr);
// console.log(shiftedArr);

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//         console.log(arr[i])
//     }
// }

// for (let el of arr) {
//     console.log(el)
// }

// for (let el in arr) {
//     console.log(el)
// }

arr.forEach((el, index) => {
    console.log('el: ' + el);
    console.log('index: ' + index)
})