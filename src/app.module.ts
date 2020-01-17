import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import { PromModule } from '@digikare/nestjs-prom';
import { WebhookController } from './controllers/webhook/webhook.controller';
import { WebhookService } from './controllers/webhook/webhook.service';

@Module({
  imports: [
    WinstonModule.forRoot({
      // options
    }),
    PromModule.forRoot({
      defaultLabels: {
        app: 'gitlab-webhook-manager',
      },
    }),

  ],
  controllers: [
    AppController,
    WebhookController,
  ],
  providers: [AppService, WebhookService],
})
export class AppModule {
}
