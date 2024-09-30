import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search/search.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    SearchComponent,
    SearchBarComponent,
    SearchResultsComponent,
    SearchItemComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
