import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './lista_de_produtos.component.html',
  styleUrls: ['./lista_de_produtos.component.scss'],
})
export class ListarProdutosComponent implements OnInit {


  public produtos: Array<Produto>;
  constructor(private ProdutoService: ProdutoService, private router: Router) {
    router.events.subscribe(() => {
      this.produtos = this.ProdutoService.getProdutos();
    })
   };
  
  ngOnInit() {
    
    
  }

}
