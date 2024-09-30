import { NgModule } from '@angular/core';

import { GiphyService } from './service/giphy.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [
    GiphyService
  ]
})
export class CoreModule { }
