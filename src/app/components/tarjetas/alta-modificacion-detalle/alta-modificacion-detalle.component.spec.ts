import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaModificacionDetalleComponent } from './alta-modificacion-detalle.component';

describe('AltaModificacionDetalleComponent', () => {
  let component: AltaModificacionDetalleComponent;
  let fixture: ComponentFixture<AltaModificacionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaModificacionDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaModificacionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
