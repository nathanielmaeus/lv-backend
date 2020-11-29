import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTotalDto } from './dto/CreateTotalDto';
import { Total } from './interfaces/total.interface';

@Injectable()
export class TotalService {
  constructor(@InjectModel('Total') private totalModel: Model<Total>) {}

  async get(): Promise<CreateTotalDto[]> {
    return this.totalModel.find({});
  }

  async save(createTotalDto: CreateTotalDto): Promise<CreateTotalDto[]> {
    const createdTotalItem = new this.totalModel(createTotalDto);
    await createdTotalItem.save();
    return this.get();
  }
}
