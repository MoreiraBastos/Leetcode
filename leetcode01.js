/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapa = new Map(); //Criar um mapa para armazenar os números e os índices
    for (let i = 0; i < nums.length; i++){ //Iterar sobre o array nums
      const complemento = target - nums[i]; //Calcular o complemento
  
      if(mapa.has(complemento)){    //Verificar se o complemento já está no mapa
          return [i, mapa.get(complemento)];    //Se sim, retornar os índices
      }else{
          mapa.set(nums[i],i);   //Se não, adicionar o número e o índice ao mapa
      }
    }
  };
