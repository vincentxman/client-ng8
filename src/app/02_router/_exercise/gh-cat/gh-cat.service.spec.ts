import { TestBed } from '@angular/core/testing';

import { GhCatService } from './gh-cat.service';

describe('GhCatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhCatService = TestBed.get(GhCatService);
    expect(service).toBeTruthy();
  });
});
