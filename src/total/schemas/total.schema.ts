import * as mongoose from 'mongoose';
import { Total } from '../interfaces/total.interface';

export type TotalDocument = Total & mongoose.Document;

export const TotalSchema = new mongoose.Schema(
  {
    USD: Number,
    EUR: Number,
    RUB: Number,
    date: String,
  },
  {
    collection: 'total',
  },
);
