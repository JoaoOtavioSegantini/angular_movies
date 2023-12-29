import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchComponent } from './watch.component';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../service/movie-service.service';

describe('WatchComponent', () => {
  let component: WatchComponent;
  let fixture: ComponentFixture<WatchComponent>;
  let movieServiceStub: Partial<MovieServiceService>;

  const movie = {
    id: 1,
    title: 'The Shawshank Redemption',
    description:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    yearLaunched: '1994',
    link: '/watch/1',
    castMembers: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    genres: ['Drama'],
    thumbFileURL:
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX28_CR0,2,190,281_.jpg',
    bannerFileURL:
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
    videoFileURL:
      'https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4',
    rating: 'r',
  };

  movieServiceStub = {
    async getMovieById(id) {
      return movie;
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: (id: any) => '1' } },
          },
        },
        { provide: MovieServiceService, useValue: movieServiceStub },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(WatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component when movie is not provided', () => {
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('.text-2xl')?.textContent).toContain(
      'Sorry, this movie is not available.'
    );
  });

  it('should render component when movie is defined', () => {
    const el = fixture.nativeElement as HTMLElement;

    component.movie = movie;

    fixture.detectChanges();

    // assert if movie information is rendered
    expect(el.querySelector('.text-2xl')?.textContent).toContain(movie.title);

    // assert if html is rendered only movie is not defined
    expect(el.querySelector('.text-2xl')?.textContent).not.toContain(
      'Sorry, this movie is not available.'
    );
  });
});
