import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, InputFieldComponent, FormsModule],
})
export class LoginComponent {
  onSubmit(f: NgForm) {
    console.log('submit', f);
  }
}
