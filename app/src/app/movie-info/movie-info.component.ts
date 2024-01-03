import { Component, Input } from '@angular/core';
import { Movie } from '../../typings/Movie';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroUserGroup,
  heroSpeakerWave,
  heroChevronDown,
  heroPlay,
  heroPlus,
} from '@ng-icons/heroicons/outline';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css',
  providers: [
    provideIcons({
      heroUserGroup,
      heroPlay,
      heroChevronDown,
      heroSpeakerWave,
      heroPlus,
    }),
  ],
  imports: [CommonModule, NgIconComponent, MovieRatingComponent],
})
export class MovieInfoComponent {
  @Input({ required: true })
  movie: Movie | undefined;
}
