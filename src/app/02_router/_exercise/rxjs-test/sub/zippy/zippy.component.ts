import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  visible = true;
  @Output() open2 = new EventEmitter<any>();
  @Output() close2 = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open2.emit(null);
    } else {
      this.close2.emit(null);
    }
  }
}
