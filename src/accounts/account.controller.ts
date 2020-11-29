import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/CreateAccountDto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('get')
  @HttpCode(HttpStatus.OK)
  async get(): Promise<CreateAccountDto[]> {
    return await this.accountService.get();
  }

  @Post('save')
  async save(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<CreateAccountDto[]> {
    return await this.accountService.save(createAccountDto);
  }

  @Get('remove')
  @HttpCode(HttpStatus.OK)
  async remove(@Query() query): Promise<CreateAccountDto[]> {
    return await this.accountService.remove(query.id);
  }
}
