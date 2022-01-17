//Questão 3

// Digamos que você tenha um array para o qual o elemento i
// é o preço de uma determinada ação no dia i.

// Se você tivesse permissão para concluir no máximo uma
// transação (ou seja, comprar uma e vender uma ação), crie
// um algoritmo para encontrar o lucro máximo.

// Note que você não pode vender uma ação antes de
// comprar.


console.log(questao3([7,1,5,3,6,4]));

console.log(questao3([7,6,4,3,1]));

function questao3(input){

    // Objeto que armazena o melho investimento.
    const bestInvestiment = {
        compra:0,
        venda:0,
        lucro:0
    };

    for(let i = 0; i < input.length; i++){ // Dias de compra
        for(let j = i+1; j < input.length; j++){ // Dias de venda
            if(i != j){ // Não pode comprar e veder no mesmo dia
                currentInvestimet = input[j] - input[i]; // Armazena o valor do lucro do investimento atual.
                if(currentInvestimet > bestInvestiment.lucro){ // Verifica e armazena o melhor lucro.
                    bestInvestiment.lucro = currentInvestimet;
                    bestInvestiment.compra = i;
                    bestInvestiment.venda = j;
                }
            }
            
        }
    }

    //Caso nenhum investimento tenha sido lucrativo.
    if(bestInvestiment.lucro <= 0){
        return "0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)";
    }

    return `${bestInvestiment.lucro} (Comprou do dia ${bestInvestiment.compra + 1} (preco igual a ${input[bestInvestiment.compra]}) 
    e vendou no dia ${bestInvestiment.venda+1} (preco igual a ${input[bestInvestiment.venda]}),
     lucro foi de ${input[bestInvestiment.venda]} - ${input[bestInvestiment.compra]}  =  ${bestInvestiment.lucro})\n`;
            
}