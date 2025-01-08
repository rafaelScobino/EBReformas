import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformasMainPageComponent } from './reformas-main-page.component';

describe('ReformasMainPageComponent', () => {
  let component: ReformasMainPageComponent;
  let fixture: ComponentFixture<ReformasMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReformasMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReformasMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
