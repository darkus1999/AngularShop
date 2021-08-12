import { Component, OnInit } from '@angular/core'
import { ProviderService }      from 'src/app/services/provider.service'

@Component({
	selector: 'navbar-component',
  	templateUrl: './navbar.component.html',
  	styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent implements OnInit{

	public product_cart: number = 0;
	public listadoProductos: Array<any> = [];
	public openCart: boolean = false;
	public result: any;
	constructor(
		private _servicioProductos: ProviderService,
	) {}

	ngOnInit(): void {
		this._servicioProductos.dispachProductos.subscribe(({data}) => {
			this.result = this.listadoProductos.find(item => item.title === data.title);
			if (this.result == undefined) {
			this.listadoProductos.push(data);
			this.product_cart += 1;
			}
		});
  	}

	listarCarrito(): void {
		this.openCart = !this.openCart;
	}


	eliminarItem(index: number): void {
		this.listadoProductos.splice(index ,1);
		this.product_cart -= 1;
		console.log(index);
	}
}