import { Body, Controller, Get, Param, ParseArrayPipe, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { SampleDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getByIds(@Query('ids', new ParseArrayPipe({ items: Number, separator: ',' })) ids: number[]) {
    return ids;
  }

  @Post()
  samplePost(@Body() sampleBody: SampleDto) {
    return sampleBody;
  }

  @Post('/bulk')
  samplePostBulk(@Body(new ParseArrayPipe({ items: SampleDto })) sampleBody: SampleDto[]) {
    return sampleBody;
  }
}
