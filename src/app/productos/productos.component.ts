import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ProviderService }      from 'src/app/services/provider.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {

  product: any = [];

  constructor(
    private _notifications: NotificationsService,
    private _servicioProductos: ProviderService,
    ) { }

  ngOnInit(): void {
    this.product = this._servicioProductos.listProduct;
  }
 
  conf_noti = {
    type: 'success',
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'fromRight',
    position: ["bottom", "left"],
    rtl: false
  };

  addCart(item: any) {
    this._servicioProductos.dispachProductos.emit({
      data: item,
    }); 
   // this._notifications.create('Producto Añadido', item.title, this.conf_noti.type, this.conf_noti);
  };
  irDetalleProducto(){
    console.log('cambiar');
  }; 
}
