import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchComponent } from './watch.component';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../service/movie-service.service';
import { PlayerComponent } from '../../player/player.component';
import { ApiRequestService } from '../../service/api-request.service';

describe('WatchComponent', () => {
  let component: WatchComponent;
  let fixture: ComponentFixture<WatchComponent>;
  let movieServiceStub: Partial<MovieServiceService>;
  let apiRequestStub: Partial<ApiRequestService>;

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

  apiRequestStub = {
    async apiRequest<T>(endpoint: 'movies'): Promise<T> {
      return movie as T;
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
        { provide: ApiRequestService, useValue: apiRequestStub },
      ],
    })

      .overrideComponent(PlayerComponent, {
        remove: {
          templateUrl: './player.component.html',
        },
        add: {
          template: `
      <div class='flex h-screen justify-center align-middle'>
        <media-player title={{movie?.title}} src={{movie?.videoFileURL}}
          class='ring-media-focus  aspect-video w-full rounded-md bg-black '>
          <a href='/'>
            <ng-icon name="heroArrowLeft" size="2rem"
              class='media-playing:opacity-0 invisible absolute left-8 top-8 z-50 h-8 cursor-pointer text-white md:visible' />
          </a>

          <div
            class='media-playing:opacity-0 visible absolute left-2 top-8 z-50 transition-opacity duration-500 md:invisible'>
            <div class='flex flex-row items-center gap-4'>
              <a href='/'>
                <ng-icon name="heroArrowLeft" size="1.5rem" class='h-6' />
              </a>
              <h1 class='text-2xl font-bold md:text-4xl lg:text-7xl'>
                {{movie?.title}}
              </h1>
            </div>
          </div>

          <media-provider class='relative mx-auto flex aspect-video max-w-fit justify-center rounded-md align-middle'>
            <div
              class='media-playing:opacity-0 invisible absolute left-8 top-96 z-50 transition-opacity duration-500 md:visible'>
              <h1 class='text-2xl font-bold md:text-4xl lg:text-7xl'>
                {{movie?.title}}
              </h1>
              <p class='text-shadow-md mt-4 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
                {{movie?.description}}
              </p>
            </div>
          </media-provider>
        </media-player>
      </div>
      `,
        },
      })
      .compileComponents();
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

    expect(el.querySelector('p')?.textContent).toContain(movie.description);
  });
});
