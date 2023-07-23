import { Component, Input, OnInit } from '@angular/core';
import { CrudArticulosService } from 'src/app/servicio/crud-articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.css'],
})
export class ListarArticuloComponent {
  @Input() articulosLista: any;

  constructor(
    private crudArticulo: CrudArticulosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  dobleClick(idArticulo: any) {
    this.router.navigate([`/editar-articulo/${idArticulo}`]);
  }

  eliminarArticulo(idArticulo: number, fila: number) {
    if (window.confirm('¿Estás seguro(a) de eliminar el artículo?')) {
      this.crudArticulo.EliminarArticulo(idArticulo).subscribe((respuesta) => {
        this.articulosLista.splice(fila, 1);
      });
    }
  }
}
