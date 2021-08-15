import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY, of, interval, from } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {
  map,
  catchError,
  distinctUntilChanged,
  pairwise,
  tap,
  delay,
  first,
  takeLast,
  distinct,
  switchMap,
} from 'rxjs/operators';

import { Trade, Status } from '../interfaces/interfaces';
import { SocketsService } from '../sockets.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent implements OnInit {
  status$: Observable<any> = of(0);
  price$: Observable<any> = of(0);
  direction$: Observable<any> = of('green');
  name = 'stuff';

  constructor(private socketService: SocketsService) {}

  ngOnInit(): void {
    this.status$ = this.socketService.getLatestStatus();
    this.price$ = this.socketService.getLatestPrice();
    this.direction$ = this.socketService.getDirection();
  }

  getBackgroundColor(value: string) {
    console.log('background:', value);
    if (value == 'red') {
      return 'red';
    }
    return 'green';
  }
}
