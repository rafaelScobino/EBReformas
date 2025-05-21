import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosMainPageComponent } from './projetos-main-page.component';

describe('ProjetosMainPageComponent', () => {
  let component: ProjetosMainPageComponent;
  let fixture: ComponentFixture<ProjetosMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetosMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
