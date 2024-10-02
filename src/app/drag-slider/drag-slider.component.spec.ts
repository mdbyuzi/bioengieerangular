import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragSliderComponent } from './drag-slider.component';

describe('DragSliderComponent', () => {
  let component: DragSliderComponent;
  let fixture: ComponentFixture<DragSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
