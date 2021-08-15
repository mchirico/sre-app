import { TestBed } from '@angular/core/testing';

import { MsgSocketsService } from './msg-sockets.service';

describe('MsgSocketsService', () => {
  let service: MsgSocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgSocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
