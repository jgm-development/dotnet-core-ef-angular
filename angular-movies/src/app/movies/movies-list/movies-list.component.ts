import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from "../../utilities/generic-list/generic-list.component";

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, GenericListComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  @Input() list: any;
  movies: any;
  remove(index: number) {
    this.list.splice(index, 1);
  }
}
