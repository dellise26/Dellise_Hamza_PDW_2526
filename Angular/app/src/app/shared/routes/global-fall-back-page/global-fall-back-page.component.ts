import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-global-fall-back-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './global-fall-back-page.component.html',
  styleUrl: './global-fall-back-page.component.scss'
})
export class GlobalFallBackPageComponent {}