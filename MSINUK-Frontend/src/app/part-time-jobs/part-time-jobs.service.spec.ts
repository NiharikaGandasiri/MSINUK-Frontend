import { TestBed } from '@angular/core/testing';

import { PartTimeJobsService } from './part-time-jobs.service';

describe('PartTimeJobsService', () => {
  let service: PartTimeJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartTimeJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
