import { NgModule, LOCALE_ID, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



//Implmentação da localização para formatar o PIPE para padrão BR
import localePt from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';

registerLocaleData(localePt)



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[ProductsComponent],
  providers:[{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }
  ]

})
export class ProductsModule { }
