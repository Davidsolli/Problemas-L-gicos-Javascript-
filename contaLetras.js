const contador = (letra ,frase) => {

    let cont = 0 

    for (let i in frase) {
        if (frase[i] === letra) {
            cont++
        }
    }

    return cont
}

console.log(contador('v', 'Daaavvid'))