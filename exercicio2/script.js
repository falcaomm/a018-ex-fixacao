const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7]

const triplos = arrayNumeros.map((item, indice, array) => {
    return item * 3
})

console.log(triplos);

const metade = arrayNumeros.map((item, indice, array) => {
    return item / 2   
})

console.log(metade);