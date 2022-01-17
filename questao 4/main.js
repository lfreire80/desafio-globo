//Questao 4

// Dados n inteiros não negativos representando um mapa de
// elevação onde a largura de cada barra é 1, calcule quanta
// água é capaz de reter após a chuva

console.log(countWater( [0,1,0,2,1,0,1,4,2,1,2,1]))


function countWater(represa){
    let len = represa.length;
    let retensao = 0;
    for(let i = 1 ; i < len ; i++){
        let maxEsq = 0;
        let maxDir = 0;
        let water = 0;
        for(let j = i-1 ; j >= 0 ; j--)
            maxEsq = (maxEsq > represa[j]) ? maxEsq : represa[j];

        for(let j = i+1 ; j < len ; j++)
            maxDir = (maxDir > represa[j]) ? maxDir : represa[j];

        
        water = (maxDir > maxEsq) ? maxEsq : maxDir;
        retensao += (water - represa[i] > 0) ? water - represa[i] : 0;
    }
    return retensao;
}

