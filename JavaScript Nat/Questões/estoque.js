const produtos = [
    { nome: 'Produto 1', preco: 10, quantidade: 5 },
    { nome: 'Produto 2', preco: 20, quantidade: 3 },
    { nome: 'Produto 3', preco: 15, quantidade: 4 }
  ];
  
  function calcularValorTotalEstoque(produtos) {
    let valorTotal = 0;
    
    for (let i = 0; i < produtos.length; i++) {
      valorTotal += produtos[i].preco * produtos[i].quantidade;
    }
    
    return valorTotal;
  }
  
  const totalEstoque = calcularValorTotalEstoque(produtos);
  console.log(`Valor total do estoque: R$ ${totalEstoque}`);
  
