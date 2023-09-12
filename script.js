/*Se debe crear un script el cual reciba 5 números al azar, detecte los números pares, 
los almacene en un array y los pinte al final del script.
Para esto se debe hacer uso de condicionales para realizar la validación de los números 
pares, arrays para almacenar los números y bluces para recorrer, los arrays. */

function numAlAzar() {
    return Math.floor(Math.random() * 10) + 1;
}
    let numerosPares =[];
    
    for (let i=0; i<5; i++) {
    let numero = numAlAzar();
    console.log(`Numero aleatorio ${i+1}: ${numero}`);

    if(numero % 2 === 0) {
        numerosPares.push(numero);
    }
        
        
    }


console.log("Numeros pares: " + numerosPares)

