import { TestBed } from '@angular/core/testing';

import { UIEventDispatcherService } from './uievent-dispatcher.service';

describe('UIEventDispatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UIEventDispatcherService = TestBed.get(UIEventDispatcherService);
    expect(service).toBeTruthy();
  });
});
