import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasListadoComponent } from './tarjetas-listado.component';

describe('TarjetasListadoComponent', () => {
  let component: TarjetasListadoComponent;
  let fixture: ComponentFixture<TarjetasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
