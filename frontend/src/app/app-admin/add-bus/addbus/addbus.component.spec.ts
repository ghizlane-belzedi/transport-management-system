import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBussComponent } from './addbus.component';

describe('AddbussComponent', () => {
  let component: AddBussComponent;
  let fixture: ComponentFixture<AddBussComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBussComponent],
    });
    fixture = TestBed.createComponent(AddBussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
