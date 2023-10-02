function findLetters(str, p) {
    var counter = 0;

    for(let i = 0; i < str.length; i++) {
        if (str[i] === p) {
            counter++;
        }
    }

    return counter;
}

console.log(findLetters('abcd', 'a'))