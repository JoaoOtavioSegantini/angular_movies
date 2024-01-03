import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroInformationCircle, heroPlay } from '@ng-icons/heroicons/outline';
import { Movie } from '../../typings/Movie';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  providers: [provideIcons({ heroInformationCircle, heroPlay })],
})
export class BannerComponent {
  @Input({ required: true })
  movie: Movie | undefined;
}
