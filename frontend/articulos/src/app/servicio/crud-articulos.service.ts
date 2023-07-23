import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from './articulo';
import { Caracteristica } from './caracteristica';

@Injectable({
  providedIn: 'root',
})
export class CrudArticulosService {
  ApiUrl: string = 'http://localhost:8888/articulosApi/public';

  constructor(private clienteHttp: HttpClient) {}

  //ARTICULOS

  AgregarArticulo(datosArticulo: Articulo): Observable<any> {
    let datos = JSON.stringify(datosArticulo);
    return this.clienteHttp.post(
      `${this.ApiUrl}/articulo/agregarArticulo/${datos}`,
      datos
    );
  }

  ConsultarArticulo(
    codigoConsultar: string,
    nombreConsultar: string,
    categoriaConsultar: string
  ): Observable<any> {
    return this.clienteHttp.get(
      `${this.ApiUrl}/articulo/consultarArticulos/${
        codigoConsultar ? codigoConsultar : null
      }/${nombreConsultar ? nombreConsultar : null}/${
        categoriaConsultar ? categoriaConsultar : null
      }`
    );
  }

  ObtenerArticulos() {
    return this.clienteHttp.get(`${this.ApiUrl}/articulo/mostrarArticulos`);
  }

  ObtenerCategorias() {
    return this.clienteHttp.get(`${this.ApiUrl}/articulo/mostrarCategorias`);
  }

  ObtenerUnArticulo(idArticulo: any): Observable<any> {
    return this.clienteHttp.get(
      `${this.ApiUrl}/articulo/visualizarArticulo/${idArticulo}`,
      idArticulo
    );
  }

  editarArticulo(idArticulo: any, datosArticulo: Articulo): Observable<any> {
    let datos = JSON.stringify(datosArticulo);
    return this.clienteHttp.post(
      `${this.ApiUrl}/articulo/actualizarArticulo/${idArticulo}`,
      datos
    );
  }

  EliminarArticulo(idArticulo: any): Observable<any> {
    return this.clienteHttp.get(
      `${this.ApiUrl}/articulo/eliminarArticulo/${idArticulo}`,
      idArticulo
    );
  }

  //CARACTERISTICAS

  AgregarCaracteristicas(datosCaracteristica: Caracteristica): Observable<any> {
    let datos = JSON.stringify(datosCaracteristica);
    return this.clienteHttp.post(
      `${this.ApiUrl}/caracteristica/agregarCaracteristica/${datos}`,
      datos
    );
  }

  ObtenerCaracteristicasArticulo(idArticulo: any) {
    return this.clienteHttp.get(
      `${this.ApiUrl}/caracteristica/mostrarCaracteristicas/${idArticulo}`,
      idArticulo
    );
  }

  EliminarCaracteristica(idCaracteristica: any): Observable<any> {
    return this.clienteHttp.get(
      `${this.ApiUrl}/caracteristica/eliminarCaracteristica/${idCaracteristica}`,
      idCaracteristica
    );
  }
}
