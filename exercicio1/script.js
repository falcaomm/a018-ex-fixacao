const objetoInicial = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1)
const caixaAlta = (objeto) => {
    return {
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
}

// console.log(caixaAlta(objetoInicial));

// 2)

const textoCorrido = (objeto) => {
    let string = `nome: ${objeto.nome}, profissão: ${objeto.profissao}, username: ${objeto.username}, senha: ${objeto.senha}.`
    return string
}

// console.log(textoCorrido(objetoInicial));

// 3)

const imprime = (objeto, callback) => {
    console.log(callback(objeto));
}

imprime(objetoInicial, caixaAlta)
imprime(objetoInicial, textoCorrido)