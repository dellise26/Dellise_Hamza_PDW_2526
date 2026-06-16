import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@shared/api/service/token.service';

export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const tokenService: TokenService = inject(TokenService);
    const canAccess: boolean = !tokenService.token$().isEmpty;
    const router: Router = inject(Router);
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}
