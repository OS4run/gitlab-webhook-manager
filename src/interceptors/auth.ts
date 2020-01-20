import { CallHandler, CanActivate, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class Auth implements CanActivate {

  /**
   * A header have to be present in headers to be valid.
   * @param context
   */
  canActivate(context: ExecutionContext): boolean {
    const headers = context.switchToHttp().getRequest().headers;
    if (headers['x-gitlab-token'] === undefined) {
      return false;
    }
    return true;
  }

}
