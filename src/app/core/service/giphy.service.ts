import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface Gif {
  name: string;
  id: string;
  url: string;
}
interface GifResponse {
  data: any[];
  meta: any;
  pagination: any;
}

@Injectable()
export class GiphyService {
  private API_KEY = 'LmyNSlPJrJdLAJeBt9LxzHoc3dtY0tcP';
  private API_URL = 'api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) { }

  searchGif(keyword = 'smileyface'): Observable<Gif[]> {
    return this.http.get(
      `https://${this.API_URL}?api_key=${this.API_KEY}&q=${keyword}&limit=24`
    ).pipe(
      map(response => (response as GifResponse).data.map((gif) => ({
        name: gif.title,
        id: gif.id,
        url: gif.images.original.url,
      })))
    );
  }
}
