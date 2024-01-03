import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, InputFieldComponent, FormsModule, AuthFormComponent],
})
export class LoginComponent {
  email = '';
  password = '';
  errors = [''];

  constructor(private readonly router: Router) {}

  onSubmit(f: NgForm) {
    console.log('submit', f.form.value);
  }

  handleSubmit = async (f: NgForm) => {
    const { email, password } = f.form.value;
    alert(`submit ${email}:${password}`);
  };
}

type ServerError = {
  message: string;
};
