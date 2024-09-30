import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SearchModule } from './feature/search/search.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, SearchModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
