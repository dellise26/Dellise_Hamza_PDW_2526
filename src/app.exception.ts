import { ApiException } from '@common/api';
import { ApiCodeResponse } from '@common/api';

export class TestException extends ApiException {
  constructor() {
    super(ApiCodeResponse.TEST, 400);
  }
}