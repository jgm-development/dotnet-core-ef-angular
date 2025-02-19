import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-list',
  imports: [CommonModule],
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.css'
})
export class GenericListComponent {
  @Input() list: any;
  index: any;
  ngOnInit(): void {
  }
  remove(index: number) {
    this.list.splice(index, 1);
  }
}
