import { Component, OnInit } from '@angular/core';
import { ISearchProps } from '../../../typings/params';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../typings/movie';
import { HeaderComponent } from '../../header/header.component';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { MovieServiceService } from '../../service/movie-service.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [CommonModule, HeaderComponent, MovieCardComponent, RouterOutlet],
})
export class SearchComponent implements OnInit {
  movies: Movie[] | undefined;

  service = new MovieServiceService();

  searchParams: ISearchProps | undefined;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap((queryParam) =>
          this.service.searchMovies(queryParam['title'], queryParam['genre'])
        )
      )
      .subscribe((res) => {
        this.movies = res;
        this.route.queryParams.subscribe(
          (param) => (this.searchParams = param)
        );
      });
  }
}
