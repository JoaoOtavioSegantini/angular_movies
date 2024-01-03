import { Injectable } from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { Movie, Movies } from '../../typings/Movie';
import { RequestOptions } from '../../typings/api-request';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  service = new ApiRequestService();

  getMovieById = async (id: string): Promise<Movie> => {
    return this.service.apiRequest(`movies/${encodeURIComponent(id)}`);
  };

  getFeaturedMovie = async (id: string): Promise<Movie> => {
    return this.service.apiRequest(`featured/${id}`);
  };

  async getMoviesByGenre(
    genre: string,
    options?: RequestOptions
  ): Promise<Movies> {
    return this.service.apiRequest(
      `movies`,
      { genres_like: encodeURIComponent(genre) },
      options
    );
  }

  searchMovies = async (
    title: string = '',
    genre: string = '',
    options: RequestOptions = {
      _limit: 100,
    }
  ): Promise<Movies> => {
    return this.service.apiRequest(
      `movies`,
      {
        title_like: encodeURIComponent(title),
        genres_like: encodeURIComponent(genre),
      },
      options
    );
  };
}
