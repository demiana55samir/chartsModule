import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRadialComponent } from './multiple-radial.component';

describe('MultipleRadialComponent', () => {
  let component: MultipleRadialComponent;
  let fixture: ComponentFixture<MultipleRadialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleRadialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleRadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
