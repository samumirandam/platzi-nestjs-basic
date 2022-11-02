import {
  Controller,
  Get,
  Param,
  Query,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `La lista de productos con: limit ${limit} y offset: ${offset}`;
  }

  @Get('filter')
  getProductFilter() {
    return `El producto buscado es filtrado`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('productId') productId: string) {
    return { message: `El producto buscado es ${productId}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'action to create',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
