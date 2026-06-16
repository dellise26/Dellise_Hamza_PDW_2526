import { Payload } from '@shared/core/model/types';

export interface SignUpPayload extends Payload {
  username: string;
  password: string;
  mail: string;
  googleHash: string;
  facebookHash: string;
}
