import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [CommonModule, RouterOutlet, HeaderComponent, BannerComponent],
})
export class LayoutComponent {
  title = 'app';
}
