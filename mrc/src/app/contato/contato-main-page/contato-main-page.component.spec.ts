import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMainPageComponent } from './contato-main-page.component';

describe('ContatoMainPageComponent', () => {
  let component: ContatoMainPageComponent;
  let fixture: ComponentFixture<ContatoMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContatoMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
