import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Observable } from 'rxjs';
import { Item } from './item';
import { dump } from '../../../../_share/utilities/tools';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  config$: Observable<any>;
  items$: Observable<Item[]>;
  idSelected: string;
  constructor(
    private itemservice: ItemsService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.showConfig();
    this.doGetItems();
  }

  showConfig() {
    this.config$ = this.itemservice.getConfig();
  }

  doSelect(id: string) {
    this.idSelected = id;
  }

  doGetItems() {
    this.items$ = this.itemservice.item_getSome();
  }

  doGetItem() {
    let id = this.route.snapshot.paramMap.get('id');
    id = id ? id : this.idSelected;

    this.itemservice.item_get(id)
      .subscribe(item => dump(item, 'doGetItem()'));
  }

  doCreateItem() {
    const newItem = { name: 'itemX', qty: 50, description: 'iiiiitem' } as Item;
    this.itemservice
      .item_create(newItem)
      .subscribe(item => dump(item, 'doCreateItem()'));
  }

  doDeleteItem() {
    this.itemservice.item_delete(this.idSelected)
      .subscribe(item => dump(item, 'doDeleteItem()'));
  }

  doUpdateItem() {
    const newItem = { _id: this.idSelected, name: 'nnnnuuuuu', qty: 99999, description: 'uuuuuuu' };
    this.itemservice
      .item_update(newItem)
      .subscribe(item => dump(item, 'doUpdateItem()'));
  }
}
