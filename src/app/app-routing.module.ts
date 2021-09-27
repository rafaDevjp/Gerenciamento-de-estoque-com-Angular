import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', 
  component: NavComponent,
  children:[
      { path: '', 
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
      },
      { path: 'pages/products', 
      loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) 
      },
      { path: 'cadastrar-produtos', 
      loadChildren: () => import('./pages/cadastrar-produtos/cadastrar-produtos.module').then(m => m.CadastrarProdutosModule) 
      },
      { path: 'atualizar-produtos/:id', 
      loadChildren: () => import('./pages/atualizar-produtos/atualizar-produtos.module').then(m => m.AtualizarProdutosModule) 
      },
    ]
  },
 
  
  { path: '**', 
  component: PageNotFoundComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
