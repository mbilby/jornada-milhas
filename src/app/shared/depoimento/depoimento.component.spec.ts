import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentoComponent } from './depoimento.component';

describe('DepoimentoComponent', () => {
  let component: DepoimentoComponent;
  let fixture: ComponentFixture<DepoimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepoimentoComponent]
    });
    fixture = TestBed.createComponent(DepoimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
