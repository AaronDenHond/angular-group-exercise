import { TestBed } from '@angular/core/testing';

import { AddAnimalService } from './add-animal.service';

describe('AddAnimalService', () => {
  let service: AddAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
