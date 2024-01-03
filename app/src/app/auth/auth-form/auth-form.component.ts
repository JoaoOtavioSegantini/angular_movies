import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';
import { LayoutComponent } from '../layout/layout.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
  imports: [
    CommonModule,
    FormsModule,
    InputFieldComponent,
    LayoutComponent,
    RouterLink,
  ],
})
export class AuthFormComponent {
  email = '';
  password = '';
  password_confirmation = '';

  @Input({ required: true })
  formType!: 'login' | 'register';

  @Input({ required: true })
  onSubmit!: (e: NgForm) => void;
}
