import { Component, OnInit } from '@angular/core';
import { dump } from '../../../_share/utilities/tools';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() {
    dump('DownloadComponent');
  }

  ngOnInit() {
  }

  onError(err) {
    dump(err);
  }


}
