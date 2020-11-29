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
    console.log(createAccountDto);
    
    const createdAccountItem = new this.accountModel(createAccountDto);
    console.log(createdAccountItem);
    
    //await createdAccountItem.save();
    return this.get();
  }

  async remove(id: number): Promise<CreateAccountDto[]> {
    await this.accountModel.deleteOne({ id });
    return this.get();
  }
}
