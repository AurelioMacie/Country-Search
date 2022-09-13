import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoBrancooComponent } from './fundo-brancoo.component';

describe('FundoBrancooComponent', () => {
  let component: FundoBrancooComponent;
  let fixture: ComponentFixture<FundoBrancooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoBrancooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundoBrancooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
