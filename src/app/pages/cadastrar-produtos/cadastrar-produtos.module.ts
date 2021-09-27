import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastrarProdutosRoutingModule } from './cadastrar-produtos-routing.module';
import { CadastrarProdutosComponent } from './cadastrar-produtos.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CadastrarProdutosComponent
  ],
  imports: [
    CommonModule,
    CadastrarProdutosRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[CadastrarProdutosComponent],
})
export class CadastrarProdutosModule { }
