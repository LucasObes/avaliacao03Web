import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosPage } from './funcionarios';

describe('Funcionarios', () => {
  let component: FuncionariosPage;
  let fixture: ComponentFixture<FuncionariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncionariosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
