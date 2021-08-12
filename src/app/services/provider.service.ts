import { EventEmitter ,Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor() { }
  listProduct = [
    {
      "title": "Fujifilm X100T 16 MP Digital Camera (Silver)",
      "precio_antes": "$590.00",
      "precio_despues": "$520.00",
      "descuento": "-$20",
      "img": "assets/images/product_1.png",
      "tipo": "men",
    },
    {
      "title": "Samsung CF591 Series Curved 27-Inch FHD Monitor",
      "precio_antes": null,
      "precio_despues": "$610.00",
      "descuento": "new",
      "img": "assets/images/product_2.png",
      "tipo": "women",
    },
    {
      "title": "Blue Yeti USB Microphone Blackout Edition",
      "precio_antes": null,
      "precio_despues": "$120.00",
      "descuento": null,
      "img": "assets/images/product_3.png",
      "tipo": "women",
    },
  ];
  @Output() dispachProductos: EventEmitter<any> = new EventEmitter(); 
}
