import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsiaNewsComponent } from './asia-news/asia-news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IndiaNewsComponent } from './india-news/india-news.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'news', component: NewsComponent,
    children:
      [{ path: 'asia', component: AsiaNewsComponent },
        { path: 'india', component: IndiaNewsComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
