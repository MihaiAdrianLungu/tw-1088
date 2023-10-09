function findWord(text, word) {
    const foundWordIndex = text.indexOf(word);

    if(foundWordIndex !== -1) {
        console.log(`Found ${word} at position ${foundWordIndex}`);
    } else {
        console.log(`Couldn't find the word ${word}`)
    }
}

findWord('I love JavaScript', 'JavaScriptt')