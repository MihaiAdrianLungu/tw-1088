function NumerePare(initialValue) {
    this.currentValue = initialValue % 2 === 0 ? initialValue : initialValue + 1;
    this.next = function() {
        this.currentValue += 2;
        return this.currentValue;
    }
}

const newObj = new NumerePare(3);
console.log(newObj.next());
console.log(newObj.next());
console.log(newObj.next());