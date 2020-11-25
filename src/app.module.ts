import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HistoryController } from './history/history.controller';
import { HistoryModule } from './history/history.module';
import { LoggerMiddleware } from './logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { URL } from './CONSTS';

@Module({
  imports: [MongooseModule.forRoot(URL), HistoryModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(HistoryController);
  }
}
