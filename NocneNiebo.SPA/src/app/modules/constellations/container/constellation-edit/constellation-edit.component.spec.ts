import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationEditComponent } from './constellation-edit.component';

describe('ConstellationEditComponent', () => {
  let component: ConstellationEditComponent;
  let fixture: ComponentFixture<ConstellationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstellationEditComponent]
    });
    fixture = TestBed.createComponent(ConstellationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
