import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPorcentajesComponent } from './tarjeta-porcentajes.component';

describe('TarjetaPorcentajesComponent', () => {
  let component: TarjetaPorcentajesComponent;
  let fixture: ComponentFixture<TarjetaPorcentajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPorcentajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPorcentajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
