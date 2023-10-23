// global scope
const x = 10;

function parentFunction() {
    // local scope

    const pVariable = 11;

    function childFunction() {
        // local scope
        console.log(pVariable);
        console.log(x);
    }

    return childFunction()
}
