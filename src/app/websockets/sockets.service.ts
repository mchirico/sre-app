import { Injectable } from '@angular/core';
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

import { Trade, Status } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SocketsService {
  constructor() {}

  socket$: WebSocketSubject<any> = webSocket({
    // url: 'wss://ws.finnhub.io?token=bsr37a748v6tucpfplbg',
    url: 'ws://localhost:1323/ws',
    openObserver: {
      next: () => {
        this.socket$.next({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' });
      },
    },
  });

  socketStatus$: WebSocketSubject<any> = webSocket({
    // url: 'wss://ws.finnhub.io?token=bsr37a748v6tucpfplbg',
    url: 'ws://localhost:1323/status',
    openObserver: {
      next: () => {
        this.socketStatus$.next({
          type: 'subscribe',
          symbol: 'BINANCE:BTCUSDT',
        });
      },
    },
  });

  getLatestStatus() {
    return this.socketStatus$.pipe(
      tap((d) => console.log('Initial:', d)),
      map((t: Status) => t.type === 'status' && t.data),

      distinctUntilChanged(),
      tap((d) => console.log('z', d)),
      catchError((_) => EMPTY)
    );
  }

  getLatestPrice() {
    return this.socket$.pipe(
      tap((d) => console.log('Initial:', d)),
      map((t: Trade) => t.type === 'trade' && t.data[0].p),

      distinctUntilChanged(),
      tap((d) => console.log('z', d)),
      catchError((_) => EMPTY)
    );
  }

  getDirection() {
    return this.getLatestPrice().pipe(
      pairwise(),
      tap((d) => {
        console.log(`Current val ${d[1]} > ${d[0]} `, d[1] > d[0]);
      }),
      map((arr) => (arr[0] < arr[1] ? 'green' : 'red'))
    );
  }

  getBackgroundColor(value: string): string {
    if (value == 'red') {
      return 'red';
    }
    return 'green';
  }
}
