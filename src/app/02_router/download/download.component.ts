import { Component, OnInit } from '@angular/core';
import { dump } from '../../../_share/utilities/tools';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  data2 = 52;
  constructor() {
    dump('DownloadComponent');
  }

  ngOnInit() {
  }

  onError(err) {
    dump(err);
  }

  doClick(an) {
    // tslint:disable-next-line:no-console
    console.log('........', an.data2);

  }

}
