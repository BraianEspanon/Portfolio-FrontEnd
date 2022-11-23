import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPerfilComponent } from './tarjeta-perfil.component';

describe('TarjetaPerfilComponent', () => {
  let component: TarjetaPerfilComponent;
  let fixture: ComponentFixture<TarjetaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
