import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Bienvenue au Dashboard</h1>
      <p>Sélectionnez une option dans le menu</p>
    </div>
  `
})
export class DashboardHomePageComponent {}