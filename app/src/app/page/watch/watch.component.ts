import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { Movie } from '../../../typings/Movie';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from '../../player/player.component';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../service/movie-service.service';

@Component({
  selector: 'app-watch',
  standalone: true,
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css',
  imports: [CommonModule, HeaderComponent, PlayerComponent],
})
export class WatchComponent implements OnInit {
  movie: Movie | undefined;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: MovieServiceService
  ) {
    this.service = new MovieServiceService();
  }

  async ngOnInit(): Promise<void> {
    try {
      this.movie = await this.service.getMovieById(
        this.route.snapshot.paramMap.get('id') ?? ''
      );
    } catch (error) {
      console.log(error);
    }
  }
}
