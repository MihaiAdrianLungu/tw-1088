function compareStrings(str1, str2) {
    if (str1.length !== str2.length) {
        return -1;
    }

    let counter = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            counter = counter + 1;
        }
    }

    return counter;
}

console.log(compareStrings('abcd', 'adfd'));