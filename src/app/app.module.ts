import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaComponent } from './components/vista/vista.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
