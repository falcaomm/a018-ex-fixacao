const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7]

const multiplica3 = arrayNumeros.map((item, indice, array) => {
    arrayTriplos = item * 3
    return arrayTriplos
})

console.log(multiplica3);

const divide2 = arrayNumeros.map((item, indice, array) => {
    arrayMetades = item / 2
    return arrayMetades
})

console.log(divide2);