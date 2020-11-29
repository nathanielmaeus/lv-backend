import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { TotalService } from './total.service';
import { CreateTotalDto } from './dto/CreateTotalDto';

@Controller('total')
export class TotalController {
  constructor(private readonly totalService: TotalService) {}

  @Get('get')
  @HttpCode(HttpStatus.OK)
  async get(): Promise<CreateTotalDto[]> {
    return await this.totalService.get();
  }

  @Post('save')
  async save(
    @Body() createTotalDto: CreateTotalDto,
  ): Promise<CreateTotalDto[]> {
    return await this.totalService.save(createTotalDto);
  }
}
