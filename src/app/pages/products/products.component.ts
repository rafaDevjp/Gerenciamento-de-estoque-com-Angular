import { ProductsModule } from './products.module';
import { Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'marca', 'price', 'categoria', 'codProduto', 'lote', 'quantidade', 'action'];
  dataSource: MatTableDataSource<ProductsModule[]>;

  productList: ProductsModule[];

  constructor(
    private route:Router, 
    private productServise:ProductService) { 

      }

  readProducts(){
    this.productServise.read().subscribe(res =>{
      this.productList = res
      console.log(this.productList);
      
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.readProducts();
  }

  //Função de Navegação
  createProducts(){
    this.route.navigate(['cadastrar-produtos'])
    console.log("ativar..");
  }

  deleteProduct(id:string){
    this.productServise.deleteProductId(id).subscribe(() =>{
      this.productServise.showMesage("O produto foi deletado")
      this.readProducts();
    })
    
  }

}




