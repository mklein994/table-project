import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GenericTableModule } from '@angular-generic-table/core';

import { SearchHeaderComponent } from './search-header/search-header.component';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    GenericTableModule,
  ],
  declarations: [TableComponent, SearchHeaderComponent],
  entryComponents: [SearchHeaderComponent],
})
export class TableModule { }
