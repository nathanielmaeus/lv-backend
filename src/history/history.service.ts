import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHistoryDto } from './dto/CreateHistoryDto';
import { History } from './interfaces/history.interface';

@Injectable()
export class HistoryService {
  constructor(@InjectModel('History') private historyModel: Model<History>) {}

  async get(): Promise<any> {
    return this.historyModel.find({});
  }

  create(historyItem: CreateHistoryDto): void {
    // console.log(historyItem);
    // this.history.push(historyItem);
    // return this.history;
  }
  remove(id: number): void {
    // this.history.splice(0, 1);
    // return this.history;
  }
}
