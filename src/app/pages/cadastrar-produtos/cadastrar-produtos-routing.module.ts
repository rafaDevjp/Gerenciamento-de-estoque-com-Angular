import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutosComponent } from './cadastrar-produtos.component';

const routes: Routes = [{ path: '', component: CadastrarProdutosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarProdutosRoutingModule { }
