//Questão 2

// Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].

// Dois brackets são considerados um par combinado se o bracket de abertura (isto
// é, (, [ou {) ocorre à esquerda de um bracket de fechamento (ou seja,),] ou} do
// mesmo tipo exato. Existem três tipos de pares de brackets : [ ], { } e ( ).

// Um par de brackets correspondente não é balanceado se o de abertura e o de
// fechamento não corresponderem entre si. Por exemplo, { [ ( ] ) } não é balanceado
// porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o de
// abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].

// Dado sequencias de caracteres, determine se cada sequência de brackets é
// balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, retorne
// NAO.

console.log("{[()]} -", questao2("{[()]}"));
console.log("{[(]}} -", questao2("{[(]}}"));
console.log("{{[[(())]]}} -", questao2("{{[[(())]]}}"));

function questao2(input){
    const brackets = input.split('');
    
    if(brackets.length % 2 !== 0)
        // Sequencias com quantidade impar de characteres nunca será balanceada.
        return "NAO";
    
    const len = brackets.length;
    const middle = brackets.length / 2;

    for(let i=0, j=len-1; i<middle; i++, j--){
        if(!isValidBracketPair(brackets[i], brackets[j]))
            return "NÂO";
    }
    return "SIM";


}

function isValidBracketPair(openBracket, closeBraket){
    const brakets = {
        "{" : "}",
        "[" : "]",
        "(" : ")",
    };
    return (brakets[openBracket] === closeBraket);
}