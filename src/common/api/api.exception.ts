import { HttpException } from '@nestjs/common';
import { ApiCodeResponse } from '@common/api';
import { ValidationError } from 'class-validator';

export class ApiException extends HttpException {
  constructor(code: ApiCodeResponse, status: number) {
    super({
      code: code,
      data: null,
      result: false
    }, status);
  }
}

// Exception spécifique pour la validation des données (payloads) [cite: 347, 348]
export class ValidationException extends HttpException {
  constructor(errors: ValidationError[]) {
    super({
      code: ApiCodeResponse.PAYLOAD_IS_NOT_VALID,
      data: errors,
      result: false
    }, 400); // Le document mentionne initialement 499 pour le test [cite: 347]
  }
}