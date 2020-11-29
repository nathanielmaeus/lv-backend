import { Module } from '@nestjs/common';
import { TotalController } from './total.controller';
import { TotalService } from './total.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TotalSchema } from './schemas/total.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Total', schema: TotalSchema }]),
  ],
  controllers: [TotalController],
  exports: [TotalModule],
  providers: [TotalService],
})
export class TotalModule {}
