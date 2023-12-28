import { Component, Input } from '@angular/core';
import { InputFieldProps } from '../../../typings/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {

  @Input({ required: true })
  id: string | undefined;
  @Input({ required: true })
  type: string | undefined;
  @Input({ required: true })
  label: string | undefined;
  @Input({ required: true })
  placeholder: string | undefined;
}
