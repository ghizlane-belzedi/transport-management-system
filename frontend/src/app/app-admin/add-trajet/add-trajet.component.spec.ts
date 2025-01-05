import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrajetComponent } from './add-trajet.component';

describe('AddTrajetComponent', () => {
  let component: AddTrajetComponent;
  let fixture: ComponentFixture<AddTrajetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTrajetComponent]
    });
    fixture = TestBed.createComponent(AddTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
