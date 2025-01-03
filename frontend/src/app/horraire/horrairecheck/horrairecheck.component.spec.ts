import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrairecheckComponent } from './horrairecheck.component';

describe('HorrairecheckComponent', () => {
  let component: HorrairecheckComponent;
  let fixture: ComponentFixture<HorrairecheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorrairecheckComponent]
    });
    fixture = TestBed.createComponent(HorrairecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
