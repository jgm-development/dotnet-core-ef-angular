import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from "./movies/movies-list/movies-list.component";
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesListComponent, MaterialModule, MenuComponent],
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
      price: 2312.23
    }, {
      title: 'Matrix',
      releaseDate: new Date(),
      price: 2312.23
    }];
    this.moviesFutureReleases = [];
  }
  title = 'angular-movies';
}
