import { TestBed } from '@angular/core/testing';

import { GhQLService } from './gh-ql.service';

describe('GhQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhQLService = TestBed.get(GhQLService);
    expect(service).toBeTruthy();
  });
});
