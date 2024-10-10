const aluno = {
    nome: 'João',
    notas: [8, 7, 9],
    
    media: function() {
      let soma = 0;
      
     
      for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
      }
      
      
      return soma / this.notas.length;
    }
  };
  
 
  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Média: ${aluno.media().toFixed(2)}`);
  
