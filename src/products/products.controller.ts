import {Controller, Get} from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getProducts(): any {
        return ['Products 1', 'Products 2'];
    }
}
