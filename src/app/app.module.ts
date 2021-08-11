import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,NbFormFieldModule,NbIconModule,NbInputModule,NbLayoutModule,NbTagModule, NbThemeModule,NbToastrModule,NbRouteTabsetModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {FormsModule} from '@angular/forms';
import { MovielistComponent } from './movielist/movielist.component';
import {HttpClientModule} from '@angular/common/http';
import {OmdbService} from './omdb.service';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    BookmarksComponent
  ],
  imports: [
    
    NbThemeModule.forRoot({ name: 'dark' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    NbTagModule,
    NbFormFieldModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
    NbRouteTabsetModule
  ],
  providers: [OmdbService],
 // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
