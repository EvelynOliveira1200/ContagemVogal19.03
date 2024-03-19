let string = "Desenvolvimento de Sistemas";
let textoMinusculo = string.toLowerCase();
let dividir = textoMinusculo.split("");
let vogais = dividir.filter((dividir) => ["a", "e", "i","o", "u"]. includes(dividir));
let ordem = vogais.sort()

console.log(`Texto: ${textoMinusculo}.`);
console.log(`As vogais presentes são: ${ordem.join(", ")}.`);
console.log(`Número de vogais são: ${vogais.length}.`);




