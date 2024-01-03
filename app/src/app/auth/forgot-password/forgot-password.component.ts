import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormsModule, NgForm } from '@angular/forms';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  imports: [CommonModule, InputFieldComponent, FormsModule, LayoutComponent],
})
export class ForgotPasswordComponent {
  email = '';

  onSubmit(f: NgForm) {
    alert(`form submitted with ${f.form.value.email} value`);
  }
}
