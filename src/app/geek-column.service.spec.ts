import { TestBed } from '@angular/core/testing';

import { GeekColumnService } from './geek-column.service';

describe('GeekColumnService', () => {
  let service: GeekColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeekColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
