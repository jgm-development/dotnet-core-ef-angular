import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() maxRating = 5;
  @Input() selectedRate = 0;
  @Output() onRating: EventEmitter<number> = new EventEmitter<number>();
  previousRate: any;
  maxRatingArr: any;
  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }
  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }
  handleMouseLeave() {
    if (this.previousRate !== 0) {
      this.selectedRate = this.previousRate;
    } else {
      this.selectedRate = 0;
    }
  }
  rate(index: number) {
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }
}
