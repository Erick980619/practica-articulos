import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarArticuloComponent } from './componentes/agregar-articulo/agregar-articulo.component';
import { EditarArticuloComponent } from './componentes/editar-articulo/editar-articulo.component';
import { ConsultarArticuloComponent } from './componentes/consultar-articulo/consultar-articulo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consultar-articulo' },
  { path: 'agregar-articulo', component: AgregarArticuloComponent },
  { path: 'editar-articulo/:id', component: EditarArticuloComponent },
  { path: 'consultar-articulo', component: ConsultarArticuloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
