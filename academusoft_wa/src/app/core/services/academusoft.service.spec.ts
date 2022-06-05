import { TestBed } from '@angular/core/testing';

import { AcademusoftService } from './academusoft.service';

describe('AcademusoftService', () => {
  let service: AcademusoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademusoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
