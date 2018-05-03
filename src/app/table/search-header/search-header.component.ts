import { GtCustomComponent } from '@angular-generic-table/core';
import { Component, OnInit } from '@angular/core';

import { Person } from '../../person';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent extends GtCustomComponent<Person> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
