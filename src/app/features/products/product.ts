import {ProductCategory} from './product-category';
import {ProductTag} from './product-tag';
import {ProductDetails} from './product-details';
import {ProductFile} from './product-file';

export interface Product {
  id: number;
  name: string;
  price: number;
  creationDate: Date;
  description: string;
  category: ProductCategory;
  productTags: ProductTag[];
  productDetails: ProductDetails[];
  productFiles: ProductFile[];
}
