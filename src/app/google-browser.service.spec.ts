import { TestBed } from '@angular/core/testing';

import { GoogleBrowserService } from './google-browser.service';

describe('GoogleBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleBrowserService = TestBed.get(GoogleBrowserService);
    expect(service).toBeTruthy();
  });
});
