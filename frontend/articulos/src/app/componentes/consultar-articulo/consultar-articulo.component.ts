import { Component, OnInit } from '@angular/core';
import { CrudArticulosService } from 'src/app/servicio/crud-articulos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Articulo } from 'src/app/servicio/articulo';

@Component({
  selector: 'app-consultar-articulo',
  templateUrl: './consultar-articulo.component.html',
  styleUrls: ['./consultar-articulo.component.css'],
})
export class ConsultarArticuloComponent {
  categorias: any;
  formConsultarArticulo: FormGroup;
  articulos: any;

  constructor(
    private crudArticulo: CrudArticulosService,
    public formulario: FormBuilder
  ) {
    this.formConsultarArticulo = this.formulario.group({
      codigoConsultar: [''],
      nombreConsultar: [''],
      categoriaConsultar: ['null'],
    });
  }

  ngOnInit(): void {
    this.crudArticulo.ObtenerCategorias().subscribe((categorias) => {
      this.categorias = categorias;
      this.crudArticulo.ObtenerArticulos().subscribe((articulos) => {
        this.articulos = articulos;
      });
    });
  }

  consultarArticulo(): any {
    let {
      codigoConsultar = null,
      nombreConsultar = null,
      categoriaConsultar = null,
    } = this.formConsultarArticulo.value;
    this.crudArticulo
      .ConsultarArticulo(codigoConsultar, nombreConsultar, categoriaConsultar)
      .subscribe((data) => {
        this.articulos = data;
      });
  }
}
