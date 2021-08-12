import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { SliderComponent } from './slider/slider.component';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './banner/banner.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { MasvendidosComponent } from './masvendidos/masvendidos.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { BlogComponent } from './blog/blog.component';
import { BoletininforComponent } from './boletininfor/boletininfor.component'

import { ProviderService } from './services/provider.service';
import { PagesComponent } from './pages/pages.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductosComponent,
    DetalleproductoComponent,
    SliderComponent,
    LandingComponent,
    BannerComponent,
    OfertasComponent,
    MasvendidosComponent,
    BeneficiosComponent,
    BlogComponent,
    BoletininforComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
