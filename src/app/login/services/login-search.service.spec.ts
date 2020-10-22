import { TestBed, inject } from '@angular/core/testing';

import { LoginSearchService } from './login-search.service';

describe('LoginSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSearchService]
    });
  });

  it('should be created', inject([LoginSearchService], (service: LoginSearchService) => {
    expect(service).toBeTruthy();
  }));
});
