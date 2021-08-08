import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class MessagesStore {
  private _messages = [];
  private _messages$ = new BehaviorSubject([]);
  private _socket$: WebSocketSubject<any>;
  private _subscription = new Subscription();

  get messages$() {
    return this._messages$.asObservable();
  } 

  constructor() {
    this._socket$ = WebSocketSubject.create('ws://localhost:8999');
    this._messages = [ 'Test', 'Test 3 as' ];
    this._messages$.next(this._messages);

    this._subscribe();
  }

  private _subscribe() {
    this._subscription.add(
      this._socket$.subscribe(
        (message) => {
          this._messages = [...this._messages, message];
          this._messages$.next(this._messages);
        },
        (err) => console.error(err),
        () => console.warn('Websocket channel completed!')
      ));
  }
}

