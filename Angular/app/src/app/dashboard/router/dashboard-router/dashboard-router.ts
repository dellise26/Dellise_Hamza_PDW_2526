import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AppNode, AppRoutes } from '@shared/routes/enum';
import { AuthService } from '@security/service';

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-router.html',
  styleUrl: './dashboard-router.scss'
})
export class DashboardRouterComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  routes = AppRoutes;
  currentUser = this.authService.currentUser$;

  ngOnInit(): void {
    this.authService.me().subscribe();
  }

  logout(): void {
    this.authService.logout().subscribe(() => this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]));
  }
}
