import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroInformationCircle, heroPlay } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  providers: [provideIcons({ heroInformationCircle, heroPlay })],
})
export class BannerComponent {}
