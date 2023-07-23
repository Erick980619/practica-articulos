import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudArticulosService } from 'src/app/servicio/crud-articulos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caracteristicas-articulo',
  templateUrl: './caracteristicas-articulo.component.html',
  styleUrls: ['./caracteristicas-articulo.component.css'],
})
export class CaracteristicasArticuloComponent {
  formAgregarCaracteristicas: FormGroup;
  caracteristicas: any;
  idArticulo: string | null;

  constructor(
    public formulario: FormBuilder,
    private crudArticulo: CrudArticulosService,
    private activeRoue: ActivatedRoute
  ) {
    this.idArticulo = this.activeRoue.snapshot.paramMap.get('id');
    this.formAgregarCaracteristicas = this.formulario.group({
      idArticulo: this.idArticulo,
      caracteristica_descripcion: [''],
      valor: [''],
      estado: 1,
    });
  }
  ngOnInit(): void {
    this.crudArticulo
      .ObtenerCaracteristicasArticulo(this.idArticulo)
      .subscribe((respuesta) => {
        this.caracteristicas = respuesta;
      });
  }

  agregarCaracteristica(): any {
    if (window.confirm('¿Estás seguro(a) de agregar la caracteristica?')) {
      this.crudArticulo
        .AgregarCaracteristicas(this.formAgregarCaracteristicas.value)
        .subscribe(
          (res) => {
            alert('Se guardo correctamente la caracteristica.');
            this.ngOnInit();
            // this.formAgregarCaracteristicas
            //   .get('caracteristica_descripcion')
            //   ?.setValue('');
            // this.formAgregarCaracteristicas.get('valor')?.setValue('');
            this.formAgregarCaracteristicas.setValue({
              idArticulo: this.idArticulo,
              caracteristica_descripcion: [''],
              valor: [''],
              estado: 1,
            });
          },
          (error) => {
            console.log(error);
            alert('error');
          }
        );
    }
  }

  eliminarCaracteristica(idCaracteristica: number, fila: number) {
    if (window.confirm('¿Estás seguro(a) de eliminar la caracteristica?')) {
      this.crudArticulo.EliminarCaracteristica(idCaracteristica).subscribe(
        (res) => {
          alert('Se elimino correctamente la caracteristica.');
          this.caracteristicas.splice(fila, 1);
        },
        (error) => {
          alert('error');
        }
      );
    }
  }
}
