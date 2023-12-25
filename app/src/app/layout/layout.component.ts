import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class LayoutComponent {
  title = 'app';

}
