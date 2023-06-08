import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationContainerComponent } from './simulation-container.component';

describe('SimulationContainerComponent', () => {
  let component: SimulationContainerComponent;
  let fixture: ComponentFixture<SimulationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationContainerComponent]
    });
    fixture = TestBed.createComponent(SimulationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
