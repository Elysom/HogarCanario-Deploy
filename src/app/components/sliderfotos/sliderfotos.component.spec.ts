import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderfotosComponent } from './sliderfotos.component';

describe('SliderfotosComponent', () => {
  let component: SliderfotosComponent;
  let fixture: ComponentFixture<SliderfotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderfotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderfotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
