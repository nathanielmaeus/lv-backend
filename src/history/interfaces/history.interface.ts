import { Document } from 'mongoose';

export interface History extends Document {
  USD: number;
  EUR: number;
  RUB: number;
}
