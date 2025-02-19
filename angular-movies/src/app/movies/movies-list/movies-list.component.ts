import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from "../../utilities/generic-list/generic-list.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, GenericListComponent, MatToolbarModule, MatButtonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  @Input() list: any;
  ngOnInit(): void {
  }
}
