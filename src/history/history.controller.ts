import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/CreateHistoryDto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get('get')
  @HttpCode(HttpStatus.OK)
  async get(): Promise<CreateHistoryDto[]> {
    return await this.historyService.get();
  }
  // @Post('create')
  // create(@Body() createHistoryDto: CreateHistoryDto): CreateHistoryDto[] {
  //   return this.historyService.create(createHistoryDto);
  // }
  // @Get('remove')
  // remove(@Query('id') id: number): CreateHistoryDto[] {
  //   return this.historyService.remove(Number(id));
  // }
}
