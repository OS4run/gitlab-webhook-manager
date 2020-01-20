import {
  Body,
  Controller, Post, UseGuards, UseInterceptors,
} from '@nestjs/common';
import { WebhookDTO } from '../../dto/WebhookDTO.dto';
import { WebhookService } from './webhook.service';
import { Auth } from '../../interceptors/auth';

@Controller('webhook')
@UseGuards(Auth)
export class WebhookController {

  private readonly webhookService: WebhookService;

  constructor(webhookService: WebhookService) {
    this.webhookService = webhookService;
  }

  @Post()
  entrypointForWebhook(@Body() body: WebhookDTO): string {
    return this.webhookService.dispatch(body.object_kind);
  }
}
