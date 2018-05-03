import { GenericTableComponent, GtConfig } from '@angular-generic-table/core';
import { Component, OnInit } from '@angular/core';

import { Person, PEOPLE } from '../person';

import { SearchHeaderComponent } from './search-header/search-header.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  config: GtConfig<Person>;

  constructor() {
    this.config = {
      settings: [
        {
          objectKey: 'id',
          sort: 'asc',
          sortOrder: 1,
          columnOrder: 0,
        },
        {
          objectKey: 'name',
          sort: 'asc',
          sortOrder: 0,
          columnOrder: 1,
        },
        {
          objectKey: 'lucky_number',
          sort: 'enable',
          columnOrder: 2,
          visible: true,
        },
      ],
      fields: [
        {
          name: 'Id',
          objectKey: 'id',
          header: {
            type: SearchHeaderComponent,
          },
        },
        {
          name: 'Name',
          objectKey: 'name',
          header: {
            type: SearchHeaderComponent,
          },
        },
        {
          name: 'Lucky number',
          objectKey: 'lucky_number',
          stackedHeading: 'Custom heading',
          header: {
            type: SearchHeaderComponent,
          },
        },
      ],
      data: PEOPLE,
    };
  }

  ngOnInit() {
  }

}
