// Questão 1

// Dado um array de números inteiros, retorne os índices dos
// dois números de forma que eles se somem a um alvo
// específico.

// Você pode assumir que cada entrada teria exatamente uma
// solução, e você não pode usar o mesmo elemento duas
// vezes


const nums =  [2, 7, 11, 15];
const tar = 9;

console.log(questao1(nums,tar));

function questao1(nums, tar){
    for(const index in nums){
        for(const index2 in nums ){
            if(nums[index] + nums[index2] == tar)
                return [parseInt(index),parseInt(index2)];
            }
    }
    return "Alvo não encontrado";
}
