import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './lista_de_produtos.component.html',
  styleUrls: ['./lista_de_produtos.component.scss'],
})
export class ListarProdutosComponent implements OnInit {

  public produtos: Array<Produto>;
  constructor(private ProdutoService: ProdutoService) { }
  
  ngOnInit() {
    this.produtos = this.ProdutoService.getProdutos();
    
  }

  

}
