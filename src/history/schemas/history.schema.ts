import * as mongoose from 'mongoose';

export type HistoryDocument = History & mongoose.Document;

export const HistorySchema = new mongoose.Schema(
  {
    USD: Number,
    EUR: Number,
    RUB: Number,
  },
  {
    collection: 'history',
  },
);
