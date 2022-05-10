import { Produto } from './produto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{ 
  public produtos : Array<Produto> = [
    new Produto('1523', 'Armortecedor', 50, 100, 60),
    new Produto('5624', 'Biela', 35, 100, 50),
    new Produto('4538', 'Pneu', 10, 100, 2),
    new Produto('8624', 'Pastilhas de Freio', 68, 150, 50),
    new Produto('9522', 'Carburador', 60, 60, 30),
    new Produto('7812', 'Radiador', 15, 50, 25),
    new Produto('3651', 'Rolamentos', 150, 200, 100),
    new Produto('0158', 'Cabeçote', 15, 40, 10)
  ]

  constructor() {}
 
  public getProdutos(){
    for (let i = 0; i < this.produtos.length; i++) {
      this.produtos[i].setColor();
      this.produtos[i].setFaltaDePecas()
    }
    return this.produtos.sort((a, b) => a.faltaDePecas - b.faltaDePecas); 
  }
  

  public editProduto(cod:String, produto:Produto){
    for(let i=0; i < this.produtos.length; i++){
      if(this.produtos[i].cod === cod){
        this.produtos[i] = produto;
      }
    }
  }
  
  
}

