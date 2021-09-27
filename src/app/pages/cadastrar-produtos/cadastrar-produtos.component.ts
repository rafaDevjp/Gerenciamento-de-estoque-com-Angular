import { ProdutoModel } from './../../models/produto-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
    selector: 'app-cadastrar-produtos',
    templateUrl: './cadastrar-produtos.component.html',
    styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

    constructor(
        private router: Router,
        private productService: ProductService,
        private forms: FormBuilder) { }

    productForms = this.forms.group({
        name: ['', Validators.required],
        marca:['', Validators.required],
        price: ['', Validators.required],
        categoria: ['', Validators.required],
        codProduto: ['', Validators.required],
        lote: ['', Validators.required, ],
        quantidade:['', Validators.required]
    });

    onSubmit() {
        console.warn(this.productForms.value);
        this.createProduct(this.productForms.value)
    }

    ngOnInit(): void {
    }

    createProduct(args: ProdutoModel) {
        this.productService.create(args).subscribe(() => {
            this.productService.showMesage("Produto adicionado com Sucesso!!");
            this.revoke();
        })
    }

    revoke(): void {
        this.router.navigate(['pages/products'])
    }



}
