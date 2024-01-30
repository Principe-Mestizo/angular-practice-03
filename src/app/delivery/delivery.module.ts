import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ComidaComponent } from './components/comida/comida.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { DescargarComponent } from './components/descargar/descargar.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormularioComponent,
    TestimonialComponent,
    RestaurantComponent,
    ComidaComponent,
    PublicidadComponent,
    DescargarComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }
