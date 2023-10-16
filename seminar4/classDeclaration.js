class Student { 
    constructor(name) { 
        this.name = name; 
        this.greet = function() { 
            console.log(`Hello, my name is ${this.name}.`); 
        } 
    }
}

const student1 = new Student('Adrian');

console.log(student1);