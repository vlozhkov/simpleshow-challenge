import { Component, Input } from '@angular/core';

import { Gif } from '../types';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() results: Gif[] = [];
  constructor() { }
}
