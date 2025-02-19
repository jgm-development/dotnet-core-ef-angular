import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from "./movies/movies-list/movies-list.component";
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesListComponent, MaterialModule, MenuComponent, RatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  moviesInTheaters: any;
  moviesFutureReleases: any;
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Troy',
      releaseDate: new Date(),
      price: 2312.23,
      poster: 'https://www.imdb.com/title/tt0332452/mediaviewer/rm1089572096/?ref_=tt_ov_i'
    }, {
      title: 'The Matrix',
      releaseDate: new Date(),
      price: 2312.23,
      poster: 'https://www.imdb.com/title/tt0133093/mediaviewer/rm525547776/?ref_=tt_ov_i'
    }];
    this.moviesFutureReleases = [];
  }
  title = 'angular-movies';
  handleRating(rate: number) {
    alert(`The user selected ${rate}`);
  }
}
