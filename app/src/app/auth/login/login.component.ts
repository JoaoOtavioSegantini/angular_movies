import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormsModule, NgForm } from '@angular/forms';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, InputFieldComponent, FormsModule, LayoutComponent],
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit(f: NgForm) {
    console.log('submit', f.form.value);
  }
}
