import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererComponent } from './gerer.component';

describe('GererComponent', () => {
  let component: GererComponent;
  let fixture: ComponentFixture<GererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererComponent]
    });
    fixture = TestBed.createComponent(GererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
