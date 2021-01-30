import { PubNubModule } from '@app/pub-nub';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PubNubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
