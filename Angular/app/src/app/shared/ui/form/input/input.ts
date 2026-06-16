import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class InputComponent {
  @Input({ required: true }) title!: string;
  @Output() titleChange = new EventEmitter<string>();
  @Input({ required: false }) icon?: string;
  @Input({ required: false }) placeholder: string = 'Placeholder par défaut';

  @Output() coucou = new EventEmitter<string>();

  onClick(): void {
    this.coucou.emit('Coucou petite perruche');
  }
}
