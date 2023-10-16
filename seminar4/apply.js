const person = { 
    name: 'John Doe', 
} 

let greeting = function(a, b) { 
    return `${a} ${this.name}. ${b}` 
} 

console.log(greeting.apply(person, ['Hello', 'How are you?'])); // Hello John Doe. How are you?