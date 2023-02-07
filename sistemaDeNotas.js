let nota1 = 7
let nota2 = 8
let soma = (nota1 + nota2) / 2

const validarNota = soma => soma >= 6 ? 'aprovado' : 'reprovado'
const notaEPar = soma => soma % 2 == 0 ? true : false

console.log(validarNota(soma))
console.log(notaEPar(soma))