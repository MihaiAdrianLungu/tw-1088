function processString(input){
    if(input.length === 0) {
        return 100;
    }

    const numbers = input.split(' ');
    let testResult = true;

    for (number of numbers) {
        if(isNaN(number)) {
            testResult = false;
        }
    }

    if (!testResult) {
        throw new Error('Item is not a number');
    }

    const onlyOddNumbers = numbers.filter(number => number % 2 !== 0);
    
    if(onlyOddNumbers.length === numbers.length) {
        return 100;
    }

    const evenNumberSum = numbers.filter(number => number % 2 === 0).reduce((acc, el) => acc - el, 100);

    return evenNumberSum;
}

const app = {
    processString: processString
}

module.exports = app