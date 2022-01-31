import { TestBed } from '@angular/core/testing';

import { LinkShortenerApiService } from './link-shortener-api.service';

describe('LinkShortenerApiService', () => {
  let service: LinkShortenerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkShortenerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
