import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { Movie } from '../../typings/movie';
import 'vidstack/player';
import 'vidstack/player/ui';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
  providers: [provideIcons({ heroArrowLeft })],
})
export class PlayerComponent {
  @Input()
  movie: Movie | undefined;
}
