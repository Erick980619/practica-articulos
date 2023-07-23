import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarArticuloComponent } from './componentes/listar-articulo/listar-articulo.component';
import { AgregarArticuloComponent } from './componentes/agregar-articulo/agregar-articulo.component';
import { EditarArticuloComponent } from './componentes/editar-articulo/editar-articulo.component';
import { ConsultarArticuloComponent } from './componentes/consultar-articulo/consultar-articulo.component';
import { CaracteristicasArticuloComponent } from './componentes/caracteristicas-articulo/caracteristicas-articulo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarArticuloComponent,
    AgregarArticuloComponent,
    EditarArticuloComponent,
    ConsultarArticuloComponent,
    CaracteristicasArticuloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
