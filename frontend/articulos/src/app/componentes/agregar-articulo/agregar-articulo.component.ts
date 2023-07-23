import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CrudArticulosService } from 'src/app/servicio/crud-articulos.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css'],
})
export class AgregarArticuloComponent {
  formAgregarArticulo: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudArticulos: CrudArticulosService,
    private router: Router
  ) {
    this.formAgregarArticulo = this.formulario.group({
      codigo: [''],
      nombre: [''],
      categoria: [''],
      estado: 1,
    });
  }

  agregarArticulo(): any {
    if (window.confirm('¿Estás seguro(a) de agregar el artículo?')) {
      this.crudArticulos
        .AgregarArticulo(this.formAgregarArticulo.value)
        .subscribe(
          (res) => {
            alert('Se guardo correctamente el artículo.');
            this.router.navigate([`/consultar-articulo`]);
          },
          (error) => {
            alert(error);
          }
        );
    }
  }
}
