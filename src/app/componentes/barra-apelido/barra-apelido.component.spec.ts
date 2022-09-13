import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraApelidoComponent } from './barra-apelido.component';

describe('BarraApelidoComponent', () => {
  let component: BarraApelidoComponent;
  let fixture: ComponentFixture<BarraApelidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraApelidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraApelidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
