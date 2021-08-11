import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {IOmdb} from '../omdb';
import {OmdbService} from '../omdb.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  @Input() bookmarkedMovies: any;


  constructor() { }

  ngOnInit(): void {
  }

}
