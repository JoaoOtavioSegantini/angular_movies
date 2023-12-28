import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { MovieRowComponent } from '../movie-row/movie-row.component';
import { MovieServiceService } from '../service/movie-service.service';
import { IMovies, Movie } from '../../typings/movie';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    MovieRowComponent,
  ],
})
export class LayoutComponent implements OnInit {
  title = 'app';
  service = new MovieServiceService();
  featuredMovie: Movie | undefined;
  movies!: IMovies;

  async ngOnInit(): Promise<void> {
    this.featuredMovie = await this.service.getFeaturedMovie('106');
    const genres = ['Drama', 'Action', 'Comedy', 'Animation'];

    this.movies = await Promise.all(
      genres.map(async (genre) => {
        const movies = await this.service.getMoviesByGenre(genre, {
          _limit: 8,
        });
        return { sectionTitle: genre, movies };
      })
    );
  }
}

