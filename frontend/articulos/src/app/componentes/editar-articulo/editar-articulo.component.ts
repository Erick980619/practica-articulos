import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudArticulosService } from 'src/app/servicio/crud-articulos.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css'],
})
export class EditarArticuloComponent {
  idArticulo: string | null;
  codigodisabled: boolean = true;
  formEditarArticulo: FormGroup;

  constructor(
    private activeRoue: ActivatedRoute,
    private CrudArticulosService: CrudArticulosService,
    public formulario: FormBuilder,
    private router: Router
  ) {
    this.idArticulo = this.activeRoue.snapshot.paramMap.get('id');
    this.CrudArticulosService.ObtenerUnArticulo(this.idArticulo).subscribe(
      (res) => {
        this.formEditarArticulo.setValue({
          codigo: res.codigo,
          nombre: res.nombre,
          categoria: res.categoria,
          estado: 1,
        });
      }
    );

    this.formEditarArticulo = this.formulario.group({
      codigo: [''],
      nombre: [''],
      categoria: [''],
      estado: 1,
    });
  }

  editarArticulo(): any {
    if (window.confirm('¿Estás seguro(a) de modificar el artículo?')) {
      this.CrudArticulosService.editarArticulo(
        this.idArticulo,
        this.formEditarArticulo.value
      ).subscribe(
        (res) => {
          alert('Se modificó correctamente el artículo.');
          this.router.navigate([`/consultar-articulo`]);
        },
        (error) => {
          alert(error);
        }
      );
    }
  }
}
