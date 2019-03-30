import { TestBed } from '@angular/core/testing';

import { BolachasService } from './bolachas.service';

describe('BolachasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BolachasService = TestBed.get(BolachasService);
    expect(service).toBeTruthy();
  });
});
