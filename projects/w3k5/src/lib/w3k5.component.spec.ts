import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W3k5Component } from './w3k5.component';

describe('W3k5Component', () => {
  let component: W3k5Component;
  let fixture: ComponentFixture<W3k5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W3k5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W3k5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
