import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArticuloComponent } from './listar-articulo.component';

describe('ListarArticuloComponent', () => {
  let component: ListarArticuloComponent;
  let fixture: ComponentFixture<ListarArticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarArticuloComponent]
    });
    fixture = TestBed.createComponent(ListarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
