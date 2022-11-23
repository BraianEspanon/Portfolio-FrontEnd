import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBasicoComponent } from './tarjeta-basico.component';

describe('TarjetaBasicoComponent', () => {
  let component: TarjetaBasicoComponent;
  let fixture: ComponentFixture<TarjetaBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaBasicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
