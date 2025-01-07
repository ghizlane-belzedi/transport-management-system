import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusConsulComponent } from './bus-consul.component';

describe('BusConsulComponent', () => {
  let component: BusConsulComponent;
  let fixture: ComponentFixture<BusConsulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusConsulComponent]
    });
    fixture = TestBed.createComponent(BusConsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
