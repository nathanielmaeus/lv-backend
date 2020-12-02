import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { TotalService } from './total.service';
import { CreateTotalDto } from './dto/CreateTotalDto';

@Controller('total')
export class TotalController {
  constructor(private readonly totalService: TotalService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async get(): Promise<CreateTotalDto[]> {
    return await this.totalService.get();
  }

  @Put()
  async save(
    @Body() createTotalDto: CreateTotalDto,
  ): Promise<CreateTotalDto[]> {
    return await this.totalService.save(createTotalDto);
  }
}
