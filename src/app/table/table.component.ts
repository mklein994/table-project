import { Component, OnInit } from '@angular/core';
import { GenericTableComponent, GtConfig } from '@angular-generic-table/core';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { Person, PEOPLE } from '../person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
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
          searchBox: true,
        },
        {
          objectKey: 'name',
          sort: 'asc',
          sortOrder: 0,
          columnOrder: 1,
          searchBox: true,
        },
        {
          objectKey: 'lucky_number',
          sort: 'enable',
          columnOrder: 2,
          visible: true,
          searchBox: true,
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
