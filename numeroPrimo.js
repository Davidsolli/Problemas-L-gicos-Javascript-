let firstNumber = 50;
let lastNumber = 100;


function ePrimo (n) {
    
    let divisores = 0;
    
    for (let index = 1; index <= n; index++) {
        
        if (n % index === 0) {
            divisores++;
        }
    }
    
    if (divisores === 2) {
        return true;
    } else {
        return false;
    }
}

for (let cont = firstNumber; cont <= lastNumber; cont++) {
    if (ePrimo(cont) === true) {
        console.log(cont + ' é primo');
    } else {
        console.log(cont + ' não é primo');
    }
}