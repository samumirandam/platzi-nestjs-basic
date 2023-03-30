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

import { ProductsService } from './../services/products.service';

import { ParseIntPipe } from 'src/common/parse-int.pipe';

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsServise: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    // return `La lista de productos con: limit ${limit} y offset: ${offset}`;
    return this.productsServise.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `El producto buscado es filtrado`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // return { message: `El producto buscado es ${productId}` };
    return this.productsServise.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'action to create',
    //   payload,
    // };
    this.productsServise.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsServise.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    //   return {
    //     id,
    //   };
    return this.productsServise.remove(+id);
  }
}
