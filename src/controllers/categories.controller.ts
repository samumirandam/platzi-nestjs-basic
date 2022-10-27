import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getProductInCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `El producto buscado en la categoria ${categoryId} es el ${productId}`;
  }
}
