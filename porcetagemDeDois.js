const porcetagemDosNumeros = (a, b) => {
    let resultado = (b * 100) / a
    
    console.log(`${b} corresponde à ${resultado % 1 === 0 ? resultado : resultado.toFixed(2)}% de ${a}`)
}

porcetagemDosNumeros(12, 3.5)