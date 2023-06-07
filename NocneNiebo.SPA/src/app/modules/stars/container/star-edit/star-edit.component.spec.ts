import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarEditComponent } from './star-edit.component';

describe('StarEditComponent', () => {
  let component: StarEditComponent;
  let fixture: ComponentFixture<StarEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarEditComponent]
    });
    fixture = TestBed.createComponent(StarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
