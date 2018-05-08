import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { TableModule } from './table/table.module';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule { }
