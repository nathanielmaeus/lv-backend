import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/CreateAccountDto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async get(): Promise<CreateAccountDto[]> {
    return await this.accountService.get();
  }

  @Put()
  async save(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<CreateAccountDto[]> {
    return await this.accountService.save(createAccountDto);
  }

  @Post()
  async update(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<CreateAccountDto[]> {
    return await this.accountService.update(createAccountDto);
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  async remove(@Query() query): Promise<CreateAccountDto[]> {
    return await this.accountService.remove(query.id);
  }
}
