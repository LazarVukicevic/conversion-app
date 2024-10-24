import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetToInchesComponent } from './feet-to-inches.component';

describe('FeetToInchesComponent', () => {
  let component: FeetToInchesComponent;
  let fixture: ComponentFixture<FeetToInchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeetToInchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeetToInchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
