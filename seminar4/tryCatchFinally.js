function divide (a,b) {
    try {
        if( b === 0 ){
            throw new Error('Impartirea la zero nu este permisa');
        }

        return a/b;
    } catch (error) {
        console.log(error.message);       
    } finally {
        console.log('Operaita a fost incheiata');
    }
}

const result1 = divide(10, 0);

console.log(result1);