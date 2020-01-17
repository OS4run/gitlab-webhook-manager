import {
  Body,
  Controller, Post, UseInterceptors,
} from '@nestjs/common';
import { WebhookDTO } from '../../dto/WebhookDTO.dto';
import { WebhookService } from './webhook.service';
import { WebhookInterceptor } from './webhook.interceptor';

@Controller('webhook')
@UseInterceptors(WebhookInterceptor)
export class WebhookController {

  private readonly webhookService: WebhookService;

  constructor(webhookService: WebhookService){
    this.webhookService = webhookService;
  }

  @Post()
  entrypointForWebhook(@Body() body: WebhookDTO): string {
    return this.webhookService.dispatch(body.object_kind);
  }
}
