import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBaseComponent } from './tarjeta-base.component';

describe('TarjetaBaseComponent', () => {
  let component: TarjetaBaseComponent;
  let fixture: ComponentFixture<TarjetaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
