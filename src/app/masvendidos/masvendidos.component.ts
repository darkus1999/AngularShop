import { Component, OnInit } from '@angular/core';
import { ProviderService }      from 'src/app/services/provider.service'

@Component({
  selector: 'app-masvendidos',
  templateUrl: './masvendidos.component.html',
  styleUrls: ['./masvendidos.component.sass']
})
export class MasvendidosComponent implements OnInit {
  listSlider: any = [];
  constructor(
    private _servicioProductos: ProviderService,
    ) { }

  ngOnInit(): void {
    this.listSlider = this._servicioProductos.listProduct;
  }

}
