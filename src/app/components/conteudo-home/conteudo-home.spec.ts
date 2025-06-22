import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoHome } from './conteudo-home';

describe('ConteudoHome', () => {
  let component: ConteudoHome;
  let fixture: ComponentFixture<ConteudoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConteudoHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
