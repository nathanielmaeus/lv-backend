import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TotalController } from './total/total.controller';
import { TotalModule } from './total/total.module';
import { LoggerMiddleware } from './logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { URL } from './CONSTS';
import { AccountModule } from './accounts/account.module';

@Module({
  imports: [MongooseModule.forRoot(URL), TotalModule, AccountModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TotalController);
  }
}
