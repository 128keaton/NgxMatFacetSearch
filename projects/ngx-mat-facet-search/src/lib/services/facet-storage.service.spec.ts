import { TestBed } from '@angular/core/testing';

import { FacetStorageService } from './facet-storage.service';

describe('FacetStorageService', () => {
  let service: FacetStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacetStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
