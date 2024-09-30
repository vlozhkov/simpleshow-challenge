import { Component } from '@angular/core';

import { GiphyService } from '../../../core/service/giphy.service';
import { Gif } from '../types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  gifs: Gif[] = [];
  isLoading = false;
  keyword = '';
  constructor(
    private giphy: GiphyService
  ) {
  }

  searchGif() {
    this.isLoading = true;
    this.giphy.searchGif(this.keyword)
      .subscribe(gifs => {
        this.gifs = gifs;
        this.isLoading = false;
      });
  }
}
