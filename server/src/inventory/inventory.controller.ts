import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { SuppliersService } from 'src/suppliers/suppliers.service';
import { ProductsService } from 'src/products/products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Inventory')
@UseInterceptors(ClassSerializerInterceptor)
@Controller({
  version: '1',
  path: 'inventory',
})
export class InventoryController {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly supplierService: SuppliersService,
    private readonly productService: ProductsService,
  ) {}

  @Post()
  async create(@Body() createInventoryDto: CreateInventoryDto) {
    const { supplierId, productId } = createInventoryDto;
    const supplier = await this.supplierService.findOne(supplierId);
    const product = await this.productService.findOne(productId);
    // TODO: reject if productid precent in inventory
    if (product) {
      createInventoryDto.product = product;
      createInventoryDto.supplier = supplier;

      const inventory = await this.inventoryService.create(createInventoryDto);
      return {
        message: 'Inventory created successfully !',
        data: { id: inventory.id },
      };
    }
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.update(id, updateInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(id);
  }
}
