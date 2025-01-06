import { ComponentFixture, TestBed } from '@angular/core/testing';

import {busconsul } from './bus-consul.component';

describe('BusConsulComponent', () => {
  let component: busconsul;
  let fixture: ComponentFixture<busconsul>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [busconsul]
    });
    fixture = TestBed.createComponent(busconsul);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
