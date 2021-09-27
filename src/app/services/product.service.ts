import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../models/produto-model';


@Injectable({
	providedIn: 'root'
})
export class ProductService {
	baseUrl = "http://localhost:3001/products"

	constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

	create(product: ProdutoModel): Observable<ProdutoModel> {
		return this.http.post<ProdutoModel>(this.baseUrl, product)
	}

	read(): Observable<ProdutoModel[]> {
		return this.http.get<ProdutoModel[]>(this.baseUrl)
	}

	readProductId(id: string): Observable<ProdutoModel> {
		const url = `${this.baseUrl}/${id}`
		return this.http.get<ProdutoModel>(url)
	}

	updateproduct(product: ProdutoModel):Observable<ProdutoModel>{
		const url = `${this.baseUrl}/${product.id}`
		return this.http.put<ProdutoModel>(url, product)
	}

	deleteProductId(id: string): Observable<ProdutoModel> {
		const url = `${this.baseUrl}/${id}`
		return this.http.delete<ProdutoModel>(url)
	}

	showMesage(msg: string): void {
		this.snackbar.open(msg, 'Close', {
			duration: 3000,
			horizontalPosition: "center",
			verticalPosition: "top"
		})
	}

}//END_CLASS
