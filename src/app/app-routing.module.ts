import { EditaProdutoComponent } from './editor_de_produtos/editor_de_produtos.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './lista_de_produtos/lista_de_produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ListarProdutosComponent
  },
  {
    path: 'listar-produtos',
    component: ListarProdutosComponent
  },
  {
    path: 'edita-produto/:cod',
    component: EditaProdutoComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
