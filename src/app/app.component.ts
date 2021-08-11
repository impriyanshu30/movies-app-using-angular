import { Component } from '@angular/core';
import {OmdbService} from './omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies';


   tabs: any[] = [
    {
      title: 'search ',
      route: '/movie'
    },
    {
      title: 'bookmarks',
      responsive: true,
      route:'/bookmark'
    }
  ];

}
