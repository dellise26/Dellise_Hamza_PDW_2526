import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-button.html',
  styleUrl: './simple-button.scss'
})
export class SimpleButtonComponent {
}
