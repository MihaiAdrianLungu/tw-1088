const person = { 
    fullName: function() { 
        console.log(this.firstName + " " + this.lastName); 
    } 
}

const person1 = { 
    firstName: "John", 
    lastName: "Doe" 
} 
    
person.fullName.call(person1); // Will return "John Doe"