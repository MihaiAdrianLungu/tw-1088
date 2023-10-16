function increaseSalary(salarii, procent) {
    if(!Array.isArray(salarii)) {
        throw new Error('Primul parametru nu este un array.');
    }

    if (typeof procent !== 'number') {
        throw new Error('Al doilea parametru nu este un numar');
    }

    const noileSalarii = salarii.map(salariu => salariu + (salariu * procent / 100));

    return noileSalarii;
}

try {
    const salarii = [1000, 2000, 3000];
    const procent = 'a';
    const salariiNoi =  increaseSalary(salarii, procent);
    console.log(salariiNoi)
} catch (error) {
    console.log(error.message);
}