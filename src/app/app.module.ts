import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CicularComponent } from './cicular/cicular.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent,
      CicularComponent,
      SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
