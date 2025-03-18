let custos=[2000, 1000, 300, 500];
let contador=0;
let somatorio=0;
while(contador < custos.length){
    somatorio = somatorio + custos[contador];
    contador=contador + 1;
}
console.log("O seu custo mensal é "+ somatorio)


let ganhos=[1548, 500, 1000, 700];
let conta=0;
let soma=0;
while(conta < ganhos.length){
    soma = soma + ganhos[conta];
    conta=conta + 1;
}
console.log("O seu ganhos mensal é "+ soma)

let diferenca = soma - somatorio;
console.log("o seu saldo é " + diferenca)