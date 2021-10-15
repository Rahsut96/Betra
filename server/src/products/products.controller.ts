import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  // UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// import { RpcException } from '@nestjs/microservices';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Products')
@UseGuards(JwtAuthGuard)
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
    // @UploadedFile() file: Express.Multer.File,
  ) {
    // if (
    //   file?.mimetype.indexOf('image') === -1 &&
    //   file?.mimetype.indexOf('application/pdf') === -1
    // ) {
    //   throw new RpcException(
    //     'Invalid file format. Only images and pdf file formats are supported',
    //   );
    // }
    // const blobData = file.buffer.toString('base64');
    // console.log('Handle barcode image data', blobData);
    try {
      const product = await this.productsService.create({
        ...createProductDto,
      });
      return { message: 'Product created successfully !', data: product };
    } catch (error) {
      console.log('Error>>>', error.code);
      return { message: 'Request failed.', data: error.code };
    }
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':barcode')
  findByBarcode(@Param('barcode') barcode: string) {
    console.log('request recieved', barcode);
    return this.productsService.findOne(barcode);
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
