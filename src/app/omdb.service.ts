import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//import { from, Observable } from 'rxjs';
import {IOmdb} from './omdb';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class OmdbService {

 
  constructor(private http:HttpClient) { }
  
  searchMovies(moviename: any): Observable<any> {
    let searchUrl = `https://www.omdbapi.com/?apikey=b45a474d&s=${encodeURI(moviename)}&r=json`;
    return this.http
      .get(searchUrl)
      .pipe(map((response: any) => response.Search));
  }

  searchMovie(id: any): Observable<any> {
    let searchUrl = `https://www.omdbapi.com/?apikey=b45a474d&i=${encodeURI(id)}&r=json`;
    return this.http
      .get(searchUrl)
      .pipe(map((response: any) => response));
  }

}
