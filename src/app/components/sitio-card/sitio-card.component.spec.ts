import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioCardComponent } from './sitio-card.component';

describe('SitioCardComponent', () => {
  let component: SitioCardComponent;
  let fixture: ComponentFixture<SitioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
