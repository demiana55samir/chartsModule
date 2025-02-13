import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialComponent } from './radial.component';

describe('RadialComponent', () => {
  let component: RadialComponent;
  let fixture: ComponentFixture<RadialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
