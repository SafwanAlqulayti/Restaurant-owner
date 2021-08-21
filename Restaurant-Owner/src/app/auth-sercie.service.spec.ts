import { TestBed } from '@angular/core/testing';

import { AuthSercieService } from './auth-sercie.service';

describe('AuthSercieService', () => {
  let service: AuthSercieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSercieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
