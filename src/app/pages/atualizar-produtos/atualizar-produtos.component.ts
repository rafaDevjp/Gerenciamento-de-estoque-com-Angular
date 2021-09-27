import { ProdutoModel } from './../../models/produto-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-atualizar-produtos',
	templateUrl: './atualizar-produtos.component.html',
	styleUrls: ['./atualizar-produtos.component.css']
})
export class AtualizarProdutosComponent implements OnInit {
	data:ProdutoModel
	productForms = this.forms.group({
		name: ['', Validators.required],
		marca: ['', Validators.required],
		price: ['', Validators.required],
		categoria: ['', Validators.required],
		codProduto: ['', Validators.required],
		lote: ['', Validators.required,],
		quantidade: ['', Validators.required]
	})



	constructor(
		private router: Router,
		private productService: ProductService,
		private forms: FormBuilder,
		private active: ActivatedRoute) { }

	ngOnInit(): void {
		const id = this.active.snapshot.paramMap.get('id');
		this.productService.readProductId(id).subscribe(res => {
			console.log(res);
			// this.data= res 
			this.productForms = this.forms.group({
				name: [res.name, Validators.required],
				marca: [res.marca, Validators.required],
				price: [res.price, Validators.required],
				categoria: [res.categoria, Validators.required],
				codProduto: [res.codProduto, Validators.required],
				lote: [res.lote, Validators.required,],
				quantidade: [res.quantidade, Validators.required],
				id: [res.id]
			});

		});
	}

	updateProduct(args: any) {
		this.productService.updateproduct(args).subscribe(() => {
			this.productService.showMesage("Produto foi Atualizado com Sucesso!!");
			this.revoke();
		})
	}


	onSubmit() : void{
		console.warn(this.productForms.value);
		this.updateProduct(this.productForms.value)
	}

	revoke(): void {
		this.router.navigate(['pages/products'])
	}

}
