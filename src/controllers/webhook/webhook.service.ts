import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {

  isRequestAllowed(): boolean {
    return true;
  }

  dispatch(objectKind: string): string {
    console.log(objectKind);
    return 'ok';
  }
}
