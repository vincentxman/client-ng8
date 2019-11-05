import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Observable } from 'rxjs';
import { Item } from './item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  config$: Observable<any>;
  items$: Observable<Item[]>;
  constructor(private itemservice: ItemsService) { }

  ngOnInit() {
    this.showConfig();
    this.items$ = this.getItems();
  }

  showConfig() {
    this.config$ = this.itemservice.getConfig();
  }

  getItems() {
    return this.itemservice.getItems();
  }

  doSelect(name: string) {

  }
  doGetItems() {
    this.items$ = this.getItems();
  }
}
