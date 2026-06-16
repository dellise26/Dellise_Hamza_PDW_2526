import { HttpException } from '@nestjs/common';
import { ApiCodeResponse } from '@common/api';
import { ValidationError } from 'class-validator';

export class ApiException extends HttpException {
  constructor(code: ApiCodeResponse, status: number) {
    super(
      {
        code: code,
        data: null,
        result: false,
      },
      status,
    );
  }
}

export class ValidationException extends HttpException {
  constructor(errors: ValidationError[]) {
    super(
      {
        code: ApiCodeResponse.PAYLOAD_IS_NOT_VALID,
        data: errors.map((e) => Object.values(e.constraints ?? {})).flat(),
        result: false,
      },
      499,
    );
  }
}