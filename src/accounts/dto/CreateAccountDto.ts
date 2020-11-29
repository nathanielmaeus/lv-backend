export class CreateAccountDto {
  timestamp: number;
  name: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'RUB';
}
