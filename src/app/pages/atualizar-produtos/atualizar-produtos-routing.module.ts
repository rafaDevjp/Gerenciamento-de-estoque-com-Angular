import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarProdutosComponent } from './atualizar-produtos.component';

const routes: Routes = [{ path: '', component: AtualizarProdutosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtualizarProdutosRoutingModule { }
