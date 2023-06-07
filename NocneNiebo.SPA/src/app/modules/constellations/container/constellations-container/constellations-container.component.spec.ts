import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationsContainerComponent } from './constellations-container.component';

describe('ConstellationsContainerComponent', () => {
  let component: ConstellationsContainerComponent;
  let fixture: ComponentFixture<ConstellationsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstellationsContainerComponent]
    });
    fixture = TestBed.createComponent(ConstellationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
