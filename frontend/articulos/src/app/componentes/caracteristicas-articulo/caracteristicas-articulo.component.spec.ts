import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasArticuloComponent } from './caracteristicas-articulo.component';

describe('CaracteristicasArticuloComponent', () => {
  let component: CaracteristicasArticuloComponent;
  let fixture: ComponentFixture<CaracteristicasArticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasArticuloComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
