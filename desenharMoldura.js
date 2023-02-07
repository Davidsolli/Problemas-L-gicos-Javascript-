const desenharMoldura = (largura, altura) => {

    let mais= '+'
    let espaco = ''
    let linhaX = ''
    let linhaY = ''
    let espacoEntreY = largura - 2

    altura -= 2
    
    for (let i = 0; i < espacoEntreY; i++) {
        
        espaco += ' ' 
    }
    
    for (let i = 0; i < largura; i++) {
        
        linhaX += mais
    }

    for (let i = 0; i < altura; i++) {

        linhaY += mais + espaco + mais + '\n'  
    }

    console.log(linhaX + '\n' + linhaY  + linhaX)
}

desenharMoldura(4, 5)