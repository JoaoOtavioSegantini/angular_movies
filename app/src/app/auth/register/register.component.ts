import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [CommonModule, AuthFormComponent],
})
export class RegisterComponent {
  handleSubmit(f: NgForm) {
    alert(`submit from register with ${f.form.value} values`);
  }
}
