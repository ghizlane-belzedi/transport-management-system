import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterComponent } from './acheter.component';

describe('AcheterComponent', () => {
  let component: AcheterComponent;
  let fixture: ComponentFixture<AcheterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcheterComponent]
    });
    fixture = TestBed.createComponent(AcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
