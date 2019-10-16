import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import { SortableHeaderDirective, SortEvent } from '../directive/sortable.directive';
import { CountryService } from '../service/country.service';
import { Country } from '../interface/country';

@Component({
  selector: 'app-table-complete',
  templateUrl: './table-complete.component.html',
  providers: [CountryService, DecimalPipe]
})
export class NgbdTableCompleteComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(SortableHeaderDirective) headers: QueryList<SortableHeaderDirective>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
