import { Genre } from './Genre';
import { Rating } from './Rating';

export type newMovies = {
  meta: Meta;
  links: Links;
  data: Movie[];
};

export enum MovieType {
  Videos = 'videos',
}

export type newMovie = {
  type: MovieType;
  id: string;
  title: string;
  description: string;
  yearLaunched: number;
  opened: boolean;
  rating: Rating;
  duration: number;
  genres: Genre[];
  categories: string[];
  castMembers: string[];
  thumbFileURL: string;
  bannerFileURL: string;
  bannerHalfFileURL: string;
  trailerFileURL: string;
  videoFileURL: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Movie = {
  id: number;
  title: string;
  description: string;
  yearLaunched: string;
  link: string;
  castMembers: string[];
  genres: string[];
  thumbFileURL: string;
  bannerFileURL: string;
  videoFileURL: string;
  rating: string;
};

export type Movies = Movie[];

export type IMovies = {
  sectionTitle: string;
  movies: Movies;
}[];

export type Links = {
  prev: null;
  last: string;
  next: string;
  first: string;
};

export type Meta = {
  to: number;
  from: number;
  path: string;
  total: number;
  perPage: number;
  lastPage: number;
  currentPage: number;
};
