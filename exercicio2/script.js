const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7]

const multiplica3 = arrayNumeros.map((item, indice, array) => {
    triplos = item * 3
    return triplos
})

console.log(multiplica3);

const divide2 = arrayNumeros.map((item, indice, array) => {
    metades = item / 2
    return metades
})

console.log(divide2);
