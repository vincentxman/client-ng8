import { Component, OnInit } from '@angular/core';
import { dump } from '../../../../_share/utilities/tools';
import { ExerciseToastService } from '../_service/my-toasts.service';

@Component({
  selector: 'app-markdown-test',
  templateUrl: './markdown-test.component.html',
  styleUrls: ['./markdown-test.component.scss']
})
export class MarkdownTestComponent implements OnInit {
  constructor(public toastService: ExerciseToastService) { }

  ngOnInit() {
    this.toastService.show('标准 toast');
    this.toastService.show('成功 toast', { classname: 'bg-success text-light', delay: 2000 });
  }

  onError(err) {
    dump(err);
  }

  showDanger(dangerTpl) {
    dump( dangerTpl, 'showDanger');
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 2000 });
  }
}
