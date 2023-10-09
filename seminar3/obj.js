const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    logFirstName: function() {
        console.log(this.firstName)
    },
    logFirstName2: () => {
        // console.log(this.firstName)
        console.log(person.firstName) 
    }
}

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(person.logFirstName2())

console.log(Object.entries(person))