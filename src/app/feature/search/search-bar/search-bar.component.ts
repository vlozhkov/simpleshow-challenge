import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{
  @Input() keyword = '';
  @Input() loading = false;
  @Output() keywordChange = new EventEmitter<string>();

  constructor() { }

  setKeyword() {
    this.keywordChange.emit(this.keyword);
  }
}
