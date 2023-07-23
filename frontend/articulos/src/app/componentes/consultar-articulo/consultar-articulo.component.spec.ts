import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarArticuloComponent } from './consultar-articulo.component';

describe('ConsultarArticuloComponent', () => {
  let component: ConsultarArticuloComponent;
  let fixture: ComponentFixture<ConsultarArticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarArticuloComponent]
    });
    fixture = TestBed.createComponent(ConsultarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
