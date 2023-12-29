import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should respond to scroll events', async () => {
    // simulate a scroll event
    expect(component.isScrolled).toBeFalsy();

    // simulate a scroll event
    window.scrollY = 50;
    window.dispatchEvent(new Event('scroll'));

    // assert variable value
    expect(component.isScrolled).toBeTruthy();

    // simulate a scroll event to top
    window.scrollY = 0;
    window.dispatchEvent(new Event('scroll'));

    // assert variable value
    expect(component.isScrolled).toBeFalsy();
  });
});
