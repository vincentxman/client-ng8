import { Component, OnInit, ContentChildren, QueryList, AfterContentInit  } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentInit {

  @ContentChildren(ChildComponent) private tableOfContents: QueryList<ChildComponent>;
  constructor() { }

  ngAfterContentInit() {
    console.log('----------------------\n');
    console.dir(this.tableOfContents);
  }
}
