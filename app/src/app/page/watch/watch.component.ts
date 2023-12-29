import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { Movie } from '../../../typings/movie';
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
  service = new MovieServiceService();
  constructor(private route: ActivatedRoute) {}

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
