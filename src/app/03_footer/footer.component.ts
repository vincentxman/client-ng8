import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


export class Star {
  constructor(public firstName: string, public lastName: string) { }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input()
  star = new Star('aa', 'bb');
  changeStar() {
    this.star.lastName = 'xjl';
  }
  constructor() { }

  ngOnInit() {
  }

}
