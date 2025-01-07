import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDriverComponent } from './app-driver.component';

describe('AppDriverComponent', () => {
  let component: AppDriverComponent;
  let fixture: ComponentFixture<AppDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDriverComponent]
    });
    fixture = TestBed.createComponent(AppDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
