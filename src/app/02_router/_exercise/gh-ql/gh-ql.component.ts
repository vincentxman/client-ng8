import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-gh-ql',
  templateUrl: './gh-ql.component.html',
  styleUrls: ['./gh-ql.component.css']
})
export class GhQLComponent implements OnInit {
  data: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.apollo.query({
      query: gql`query {
        cats {
          id
          name
          age
          breed
        }
      }`
    }).subscribe(({ data, loading }) => {
      this.data = data;
      console.log(data);
    });
  }
}
