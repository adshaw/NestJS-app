import { Injectable } from '@nestjs/common';
import {Product} from "./products.model";

@Injectable()
export class ProductsService {

    products: Product[] = [];

    insertProduct(){

    }
}
