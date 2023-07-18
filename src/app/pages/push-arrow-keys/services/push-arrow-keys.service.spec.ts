import { TestBed } from '@angular/core/testing';

import { PushArrowKeysService } from './push-arrow-keys.service';

describe('PushArrowKeysService', () => {
  let service: PushArrowKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushArrowKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
