let numeros = [1, 2, 3, 4, 5];
let valorAnterior = 3;
let nuevoValor = 10;

// Buscamos el índice del valor anterior
let indice = numeros.indexOf(valorAnterior);

// Reemplazamos el valor anterior con el nuevo valor
if (indice !== -1) {
	numeros.splice(indice, 1, nuevoValor);
}

console.log(numeros); // [1, 2, 10, 4, 5]
