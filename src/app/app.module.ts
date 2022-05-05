import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { AsiaNewsComponent } from './asia-news/asia-news.component';
import { IndiaNewsComponent } from './india-news/india-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NewsComponent,
    AsiaNewsComponent,
    IndiaNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
