import { TestBed } from '@angular/core/testing';

import { NavbarSignalService } from './navbar-signal.service';

describe('NavbarSignalService', () => {
  let service: NavbarSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
