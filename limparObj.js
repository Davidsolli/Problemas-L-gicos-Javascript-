const user = {
    nome: null,
    sobrenome: 'Oliveira',
    idade: 20
}

console.log(user)

const limparUser = (user) => {
    if (user.nome == null ) {
        delete user.nome
    } else if (user.sobrenome == null) {
        delete user.sobrenome
    } else if (user.idade == null) {
        delete user.idade
    }

    console.log(user)
}

limparUser(user)