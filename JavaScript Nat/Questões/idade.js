let pessoas = [];


function coletarDados() {
  for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));

    
    pessoas.push({ nome: nome, idade: idade });
  }
}


function exibirMaioresDeIdade() {
  console.log("Pessoas com mais de 18 anos:");
  
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 18) {
      console.log(pessoas[i].nome);
    }
  }
}


coletarDados();


exibirMaioresDeIdade();
