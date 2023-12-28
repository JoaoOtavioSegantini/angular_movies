import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
  Scroll,
} from '@angular/router';
import { SearchFormComponent } from '../search-form/search-form.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, SearchFormComponent, RouterOutlet, RouterLink],
})
export class HeaderComponent {
  isScrolled = false;
  searchTerm: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  @HostListener('window:scroll', ['$event.target']) // for scroll events of the current element
  handleScroll(event: Scroll) {
    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.resetScroll();
    }
  }
  resetScroll() {
    this.isScrolled = false;
  }

  onSearch = (f: NgForm) => {
    this.router.navigate([`/search`], {
      queryParams: {
        title: f.form.value.search,
      },
      queryParamsHandling: 'merge',
    });
  };
}
