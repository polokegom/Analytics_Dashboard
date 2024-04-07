import { TestBed } from '@angular/core/testing';

import { PdfconverterService } from './pdfconverter.service';

describe('PdfconverterService', () => {
  let service: PdfconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
