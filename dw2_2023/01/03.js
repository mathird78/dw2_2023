let numero = 10;
let numerosPares = [];

for (let i = 1; i <= numero; i++) {
	if (i % 2 === 0) {
		numerosPares.push(i);
	}
}

console.log(numerosPares); // [2, 4, 6, 8, 10]
