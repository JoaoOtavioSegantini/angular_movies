import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.css',
})
export class MovieRatingComponent {
  textColor = (rating: string | undefined) => {
    switch (rating) {
      case 'pg':
        return 'text-green-500';
      case 'pg-13':
        return 'text-yellow-500';
      case 'r':
        return 'text-red-500';
      case 'nc-17':
        return 'text-red-700';
      default:
        return 'text-white';
    }
  };

  @Input({ required: true })
  rating: string | undefined;
}
