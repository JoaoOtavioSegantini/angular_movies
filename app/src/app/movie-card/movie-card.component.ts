import { Component, Input } from '@angular/core';
import { Movie } from '../../typings/movie';
import { CommonModule } from '@angular/common';
import { MovieInfoComponent } from '../movie-info/movie-info.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
  imports: [CommonModule, MovieInfoComponent],
})
export class MovieCardComponent {
  @Input()
  movie: Movie | undefined;
}
