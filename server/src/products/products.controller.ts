import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RpcException } from '@nestjs/microservices';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller({
  version: '1',
  path: 'products',
})
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('barcode'))
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (
      file?.mimetype.indexOf('image') === -1 &&
      file?.mimetype.indexOf('application/pdf') === -1
    ) {
      throw new RpcException(
        'Invalid file format. Only images and pdf file formats are supported',
      );
    }
    // const blobData = file.buffer.toString('base64');
    // console.log('Handle barcode image data', blobData);
    const product = await this.productsService.create({
      ...createProductDto,
      barcode:
        'https://barcode.tec-it.com/barcode.ashx?data=ABC-abc-1234&code=Code128&translate-esc=on',
    });
    return { message: 'Product created successfully !', data: product };
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
