import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '@shared/api/service/api.service';
import { TokenService } from '@shared/api/service/token.service';
import { ApiResponse } from '@shared/core/model/types';
import { ApiURI } from '@shared/api/enum';
import { SignInPayload } from '../data/payload/signin.payload';
import { SignUpPayload } from '../data/payload/signup.payload';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly tokenService = inject(TokenService);

  currentUser$: WritableSignal<any> = signal(null);

  signIn(payload: SignInPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_IN, payload).pipe(
      tap((res: ApiResponse) => {
        if (res.result) {
          this.tokenService.setToken({ ...res.data, isEmpty: false });
        }
      })
    );
  }

  signUp(payload: SignUpPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_UP, payload).pipe(
      tap((res: ApiResponse) => {
        if (res.result) {
          this.tokenService.setToken({ ...res.data, isEmpty: false });
        }
      })
    );
  }

  me(): Observable<ApiResponse> {
    return this.api.get(ApiURI.ME).pipe(
      tap((res: ApiResponse) => {
        if (res.result) {
          this.currentUser$.set(res.data);
        }
      })
    );
  }

  logout(): Observable<ApiResponse> {
    return this.api.post(ApiURI.LOGOUT, {}).pipe(
      tap(() => this.signOut())
    );
  }

  signOut(): void {
    this.tokenService.setToken({ token: '', refreshToken: '', isEmpty: true });
  }
}
