import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../typings/Movie';

@Component({
  selector: 'app-movie-row',
  standalone: true,
  templateUrl: './movie-row.component.html',
  styleUrl: './movie-row.component.css',
  imports: [CommonModule, MovieCardComponent],
})
export class MovieRowComponent {
  @Input({ required: true })
  movies: Movie[] | undefined;

  @Input({ required: true })
  sectionTitle: string | undefined;
}
