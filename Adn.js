//Execice cours Jéremy sur l'algorithmi 
//Solution 1 de l'exercice 1 de L'agorithmie

//Utilisation de la Méthode Split();
const brinAdn =
{
    'A':['A','T'],
    'T':['T','A'],
    'C':['C','G'],
    'G':['G','C']
} 

function tabAdn(inputAdn) {
    const tableau=[];
    inputAdn=inputAdn.split('');
    inputAdn.forEach((element)=>{
        tableau.push(brinAdn[element])
    })
    return tableau;
}
    
                console.log(tabAdn("ATTGGC"));


//Juste pour l'affichage dans la console pour séparer les deux méthodes
console.log("####### Solution 2 ########");

//Solution 2 Utilisation d'une boucle For avec des conditions if 

    function pairElement(inputAdn2) {

        const tableau2 = [];
      
        for (let i = 0; i < inputAdn2.length; i += 1) {
      
          if (inputAdn2[i] === 'A') tableau2.push([inputAdn2[i], 'T']);
          if (inputAdn2[i] === 'T') tableau2.push([inputAdn2[i], 'A']);
          if (inputAdn2[i] === 'C') tableau2.push([inputAdn2[i], 'G']);
          if (inputAdn2[i] === 'G') tableau2.push([inputAdn2[i], 'C']);
        }
        return tableau2;
      }
      
     console.log(pairElement("ATC"));