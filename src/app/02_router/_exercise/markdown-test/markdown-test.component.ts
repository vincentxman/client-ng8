import { Component, OnInit } from '@angular/core';
import { dump } from '../../../../_share/utilities/tools';

@Component({
  selector: 'app-markdown-test',
  templateUrl: './markdown-test.component.html',
  styleUrls: ['./markdown-test.component.css']
})
export class MarkdownTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onError(err) {
    dump(err);
  }
}
