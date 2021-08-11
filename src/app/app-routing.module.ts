import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovielistComponent} from './movielist/movielist.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';

const routes: Routes = [
{
  path:'movie',
  component:MovielistComponent
},
{
  path:'bookmark',
  component:BookmarksComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
