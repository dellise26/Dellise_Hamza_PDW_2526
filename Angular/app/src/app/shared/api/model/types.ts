import { IsEmpty } from '@shared/core/model/types';

export interface Token extends IsEmpty {
  token: string;
  refreshToken: string;
}
