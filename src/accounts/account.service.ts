import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/CreateAccountDto';
import { Account } from './interfaces/account.interface';

@Injectable()
export class AccountService {
  constructor(@InjectModel('Account') private accountModel: Model<Account>) {}

  async get(): Promise<CreateAccountDto[]> {
    return await this.accountModel.find({});
  }

  async save(createAccountDto: CreateAccountDto): Promise<CreateAccountDto[]> {
    const createdAccountItem = new this.accountModel(createAccountDto);

    await createdAccountItem.save();
    return this.get();
  }

  async remove(id: number): Promise<CreateAccountDto[]> {
    await this.accountModel.deleteOne({ timestamp: id });
    return this.get();
  }

  async update(
    createAccountDto: CreateAccountDto,
  ): Promise<CreateAccountDto[]> {
    await this.accountModel.findOneAndUpdate(
      { timestamp: createAccountDto.timestamp },
      {
        $set: createAccountDto,
      },
    );
    return await this.get();
  }
}
