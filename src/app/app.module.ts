import { EditaProdutoComponent } from './editor_de_produtos/editor_de_produtos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarProdutosComponent } from './lista_de_produtos/lista_de_produtos.component';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [AppComponent, ListarProdutosComponent, EditaProdutoComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            BrowserModule, 
            CommonModule,
            OrderModule,
            FormsModule,
            ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
