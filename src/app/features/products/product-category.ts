export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  smallImageUrl: string;
  bigImageUrl: string;
  childrens: ProductCategory[];
  parent: ProductCategory;
}
