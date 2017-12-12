import { TestBed, inject } from '@angular/core/testing';

import { NewproductService } from './newproduct.service';

describe('NewproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewproductService]
    });
  });

  it('should be created', inject([NewproductService], (service: NewproductService) => {
    expect(service).toBeTruthy();
  }));
});
