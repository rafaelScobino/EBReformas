import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosMainPageComponent } from './lancamentos-main-page.component';

describe('LancamentosMainPageComponent', () => {
  let component: LancamentosMainPageComponent;
  let fixture: ComponentFixture<LancamentosMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LancamentosMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancamentosMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
