import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AtualizarProdutosRoutingModule } from './atualizar-produtos-routing.module';
import { AtualizarProdutosComponent } from './atualizar-produtos.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AtualizarProdutosComponent
  ],
  imports: [
    CommonModule,
    AtualizarProdutosRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[AtualizarProdutosComponent]
})
export class AtualizarProdutosModule { }
