export interface IProductList {
  productId: number;
  productSlug: string;
  isNew: boolean;
  theme: string;
  image: string[];
  productTemplate: string;
  productPackage: string;
  price: number;
  discount?: number;
  category: string;
  portfolio: boolean;
}

export interface IProductFilter {
  category: string;
  filter?: {
    binding: keyof IProductList;
    data: string[];
  };
}
