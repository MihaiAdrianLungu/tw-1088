const testFunction = () => {
    let x = 0;

    return {
        getVariable: function() {
            console.log(x);
        },
        incrementVariable: function() {
            x = x + 1;
        }
    }
}

const result = testFunction();

console.log(result)
console.log(result.getVariable())
result.incrementVariable()
result.getVariable()


