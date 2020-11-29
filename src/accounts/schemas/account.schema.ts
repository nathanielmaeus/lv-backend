import * as mongoose from 'mongoose';
import { Account } from '../interfaces/account.interface';

export type AccountDocument = Account & mongoose.Document;

export const AccountSchema = new mongoose.Schema(
  {
    timestamp: Number,
    name: String,
    amount: Number,
    currency: String,
  },
  {
    collection: 'accounts',
  },
);
