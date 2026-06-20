import { ApiCodeResponse, ApiException } from '@common/api';

export class DvdCreateException extends ApiException {
  constructor() {
    super(ApiCodeResponse.DVD_CREATE_ERROR, 200);
  }
}

export class DvdDeleteException extends ApiException {
  constructor() {
    super(ApiCodeResponse.DVD_DELETE_ERROR, 200);
  }
}

export class DvdNotFoundException extends ApiException {
  constructor() {
    super(ApiCodeResponse.DVD_NOT_FOUND, 200);
  }
}

export class DvdListException extends ApiException {
  constructor() {
    super(ApiCodeResponse.DVD_LIST_ERROR, 200);
  }
}

export class DvdUpdateException extends ApiException {
  constructor() {
    super(ApiCodeResponse.DVD_UPDATE_ERROR, 200);
  }
}
