import { TestBed } from '@angular/core/testing';

import { ApipdfconverterService } from './apipdfconverter.service';

describe('ApipdfconverterService', () => {
  let service: ApipdfconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdfconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
