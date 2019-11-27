import { Component, OnInit } from '@angular/core';
import { from, interval, fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { dump, dumpErr } from '../../../../_share/utilities/tools';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.css']
})
export class RxjsTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.from_event();
  }

  from_promise() {
    const data = from(fetch('tst/heroes'));
    data.subscribe({
      next(response) { dump(response, 'from_promise'); },
      error(err) { dumpErr(err, 'from_promise'); },
      complete() { dump('Completed', 'from_promise'); }
    });
  }
  from_ajax() {
    const apiData = ajax('tst/heroes');
    // Subscribe to create the request
    apiData.subscribe(res => dump(res.status, res.response));
  }

  from_counter() {
    const secondsCounter = interval(1000).pipe(take(3));
    // Subscribe to begin publishing values
    secondsCounter.subscribe(n =>
      dump(`It's been ${n} seconds since subscribing!`));
  }



  from_event() {
    const el = document.getElementById('my-element');
    const mouseMoves = fromEvent(el, 'mousemove').pipe(take(3));
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      dump(`Coords: ${evt.clientX} X ${evt.clientY}`);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }


  showZippy(cmd: string) {
    dump(cmd, 'showZippy');
  }
}
