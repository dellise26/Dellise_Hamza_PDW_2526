import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-container">
      <nav class="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a routerLink="/dashboard">Accueil</a></li>
          <li><a routerLink="/dashboard/members">Membres</a></li>
        </ul>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      height: 100vh;
    }
    .sidebar {
      width: 250px;
      background: #f0f0f0;
      padding: 20px;
    }
    .content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
  `]
})
export class DashboardRouterComponent {}