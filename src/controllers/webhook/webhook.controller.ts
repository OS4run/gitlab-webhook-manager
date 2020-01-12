import {
  Controller, Get, Post,
} from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Get()
  toto(): string {
    return 'toto';
  }
}
