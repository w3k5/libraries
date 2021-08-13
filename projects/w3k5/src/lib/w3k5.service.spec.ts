import { TestBed } from '@angular/core/testing';

import { W3k5Service } from './w3k5.service';

describe('W3k5Service', () => {
  let service: W3k5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(W3k5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
