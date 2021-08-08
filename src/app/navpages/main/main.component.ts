import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY, of, interval} from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { map, catchError, distinctUntilChanged, pairwise, tap, delay, first, takeLast, distinct, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name = 'stuff'



  constructor() { }

  ngOnInit(): void {

  }

  

}
