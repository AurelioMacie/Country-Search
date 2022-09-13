import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoFundoComponent } from './plano-fundo.component';

describe('PlanoFundoComponent', () => {
  let component: PlanoFundoComponent;
  let fixture: ComponentFixture<PlanoFundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoFundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoFundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
