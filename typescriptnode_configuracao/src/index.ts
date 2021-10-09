//1. Escreva um trecho de código para imprimir os números 
//pares definidos por um intervalo de valores inteiros não-negativos inicio e fim. Utilize versões com for e while.

let ini: number = 0;
let fim: number = 22;

for (ini = 0; ini < fim; ini++) {
    if (ini > 1 && ini % 2 == 0) {
        console.log(ini)
    }
}
while (ini < fim) {
    if (ini % 2 == 0) {
        console.log(ini + " é par")
        ini++
    }
    ini++
}
