import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isScrolled = false;

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
}
