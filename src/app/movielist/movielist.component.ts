import { Component, OnInit } from '@angular/core';
import {OmdbService} from '../omdb.service';
import {IOmdb} from '../omdb';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';
import {getLocalStorage, setLocalStorage} from '../localStorage';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {



  searchStr: string;
  searchMovies: IOmdb[];
   bookmarkedMovies: string[];

  constructor(private omdb : OmdbService,private toastrService: NbToastrService){}
  ngOnInit(): void {
    getLocalStorage();

  }



  getMovies(): void {
    this.searchMovies = new Array<IOmdb>();
    this.omdb.searchMovies(this.searchStr)
      .subscribe(res => {
        try {
          res.forEach((movie:any) => {
            this.omdb.searchMovie(movie.imdbID)
              .subscribe(result => this.searchMovies.push(result));
          });
        } catch (e) {
          //alert("not a valid search");
          this.showToast('warning', 'not a valid search');
        }
        console.log(this.searchMovies.length);
        console.log(res);
      });
  }

  onSubmit(): void {
    this.getMovies();
  }



  onBookmark(movie: IOmdb): void {
    if (this.bookmarkedMovies.includes(movie.imdbID)) {
      this.bookmarkedMovies.splice(this.bookmarkedMovies.indexOf(movie.imdbID), 1);
      //this.showToast('danger', 'Bookmark deleted!');
    } else {
      this.bookmarkedMovies.push(movie.imdbID);
      //this.showToast('success', 'Bookmark added!');
    }
    setLocalStorage(this.bookmarkedMovies);
  }

  showToast(status: NbComponentStatus, message: string): void {
    this.toastrService.show(message, `Information`, {status});
  }

}
