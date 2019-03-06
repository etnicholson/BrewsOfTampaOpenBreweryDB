/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpenDBService } from './openDB.service';

describe('Service: OpenDB', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenDBService]
    });
  });

  it('should ...', inject([OpenDBService], (service: OpenDBService) => {
    expect(service).toBeTruthy();
  }));
});
