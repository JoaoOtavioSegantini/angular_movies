import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRatingComponent } from './movie-rating.component';

describe('MovieRatingComponent', () => {
  let component: MovieRatingComponent;
  let fixture: ComponentFixture<MovieRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('renders without crashing', () => {
    const fixture = TestBed.createComponent(MovieRatingComponent);
    fixture.componentInstance.rating = 'pg';
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('span')?.textContent).toContain('pg');
  });

  it('displays the correct rating', () => {
    const fixture = TestBed.createComponent(MovieRatingComponent);
    fixture.componentInstance.rating = 'pg-13';

    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('span')?.textContent).toContain('pg-13');
  });

  it('applies the correct text color for rating "pg"', () => {
    const fixture = TestBed.createComponent(MovieRatingComponent);
    fixture.componentInstance.rating = 'pg';

    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();

    expect(compiled.querySelector('span')).toHaveClass('text-green-500');
  });

  it('applies the correct text color for rating "pg-13"', () => {
    const fixture = TestBed.createComponent(MovieRatingComponent);
    fixture.componentInstance.rating = 'pg-13';

    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('span')).toHaveClass('text-yellow-500');
  });

  it('applies the correct text color for rating "r"', () => {
    const fixture = TestBed.createComponent(MovieRatingComponent);
    fixture.componentInstance.rating = 'r';

    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('span')).toHaveClass('text-red-500');
  });

  it('applies the correct text color for rating "nc-17"', () => {
    const fixture = TestBed.createComponent(MovieRatingComponent);
    fixture.componentInstance.rating = 'nc-17';

    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('span')).toHaveClass('text-red-700');
  });

  it('applies the default text color for unknown ratings', () => {
    const fixture = TestBed.createComponent(MovieRatingComponent);
    fixture.componentInstance.rating = 'unknown';

    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    expect(compiled.querySelector('span')).toHaveClass('text-white');
  });
});
