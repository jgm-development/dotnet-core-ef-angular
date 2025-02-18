import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  movies: any;
  index: any;
  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [{
        title: 'Mr Robot',
        releaseDate: new Date('2015-11-16'),
        price: 1500
      }, {
        title: 'Game of Throne',
        releaseDate: new Date('2018-02-21'),
        price: 2000
      }];
    }, 1000);
  }
  title = 'angular-movies';
}
