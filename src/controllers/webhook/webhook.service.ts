import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {

  isRequestAllowed(): boolean {
    return true;
  }

  dispatch(objectKind: string): string {
    return 'ok';
  }
}
