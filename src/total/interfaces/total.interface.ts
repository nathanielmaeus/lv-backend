import { Document } from 'mongoose';

export interface Total extends Document {
  USD: number;
  EUR: number;
  RUB: number;
  date: string;
}
