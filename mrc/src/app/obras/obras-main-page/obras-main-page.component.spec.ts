import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasMainPageComponent } from './obras-main-page.component';

describe('ObrasMainPageComponent', () => {
  let component: ObrasMainPageComponent;
  let fixture: ComponentFixture<ObrasMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObrasMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObrasMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
