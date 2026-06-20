import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '@shared/api/service/api.service';
import { ApiResponse } from '@shared/core/model/types';
import { ApiURI } from '@shared/api/enum';
import { Dvd, DvdCreatePayload, DvdUpdatePayload } from '../model/types';

@Injectable({ providedIn: 'root' })
export class DvdService {
  private readonly api = inject(ApiService);

  List$: WritableSignal<Dvd[]> = signal([]);
  Detail$: WritableSignal<Dvd | null> = signal(null);

  getAll(): Observable<ApiResponse> {
    return this.api.get(ApiURI.DVD_LIST).pipe(
      tap((res: ApiResponse) => {
        if (res.result) {
          this.List$.set(res.data);
        }
      })
    );
  }

  detail(id: string): Observable<ApiResponse> {
    return this.api.get(ApiURI.DVD_DETAIL + id).pipe(
      tap((res: ApiResponse) => {
        if (res.result) {
          this.Detail$.set(res.data);
        }
      })
    );
  }

  create(payload: DvdCreatePayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.DVD_CREATE, payload);
  }

  update(payload: DvdUpdatePayload): Observable<ApiResponse> {
    return this.api.put(ApiURI.DVD_UPDATE, payload);
  }

  delete(id: string): Observable<ApiResponse> {
    return this.api.delete(ApiURI.DVD_DELETE + id);
  }
}
