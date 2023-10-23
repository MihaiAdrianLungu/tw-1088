// try {
//     fetch('https://api.github.com/users/MihaiAdrianLungu')
//     .then(res => res.json())
//     .then(res => console.log(res))
// } catch (error) {
//     console.log(error.message);
// }

async function getData() {
    const result = await fetch('https://api.github.com/users/MihaiAdrianLungu');

    return result;
}

async function parseData() {
    const data = await getData();
    const jsondata = await data.json();

    console.log(jsondata);
}

parseData();