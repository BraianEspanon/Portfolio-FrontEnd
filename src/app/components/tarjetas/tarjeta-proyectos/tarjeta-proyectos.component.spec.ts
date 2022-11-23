import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProyectosComponent } from './tarjeta-proyectos.component';

describe('TarjetaProyectosComponent', () => {
  let component: TarjetaProyectosComponent;
  let fixture: ComponentFixture<TarjetaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
