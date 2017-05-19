import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule } from "@angular/material"

import { CicularComponent } from './cicular/cicular.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
      AppComponent,
      CicularComponent,
      SearchComponent,
      UserComponent,

      
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
