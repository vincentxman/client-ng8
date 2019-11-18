import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { dump } from '../../../_share/utilities/tools';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public version: string = environment.version;
  constructor() {
    dump('HomeComponent');
  }
}
