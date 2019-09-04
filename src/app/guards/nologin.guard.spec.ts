import { TestBed, async, inject } from '@angular/core/testing';

import { NologinGuard } from './nologin.guard';

describe('NologinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NologinGuard]
    });
  });

  it('should ...', inject([NologinGuard], (guard: NologinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
