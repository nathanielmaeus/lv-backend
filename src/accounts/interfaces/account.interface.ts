import { Document } from 'mongoose';

export interface Account extends Document {
  timestamp: number;
  name: string;
  amount: number;
  currency: 'RUB' | 'USD' | 'EUR';
}
