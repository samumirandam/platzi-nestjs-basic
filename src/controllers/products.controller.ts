import { Controller, Get, Param, Query } from '@nestjs/common';

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
  getProduct(@Param('productId') productId: string) {
    return `El producto buscado es ${productId}`;
  }
}
