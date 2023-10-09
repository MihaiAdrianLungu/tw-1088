const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];

const year = new Date().getFullYear();

// const mappedYears = birthYears.map(el => {
//     return year - el;
// })?.filter(el => el >=18)

const mappedYears = birthYears.filter(el => {
    return year - el >= 18 ? true : false
})

console.log(mappedYears)