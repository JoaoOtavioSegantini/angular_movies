import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-search-form',
  standalone: true,
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
  providers: [provideIcons({ heroMagnifyingGlass })],
  imports: [CommonModule, FormsModule, NgIconComponent],
})
export class SearchFormComponent {
  @Input({ required: true })
  searchTerm: string | undefined;

  @Input({ required: true })
  onSearch!: (value: NgForm) => void;
}
