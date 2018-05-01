import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericTableModule } from '@angular-generic-table/core';

import { TableComponent } from './table.component';
import { SearchHeaderComponent } from './search-header/search-header.component';

@NgModule({
  imports: [
    CommonModule,
    GenericTableModule,
  ],
  declarations: [TableComponent, SearchHeaderComponent],
  entryComponents: [SearchHeaderComponent],
})
export class TableModule { }
