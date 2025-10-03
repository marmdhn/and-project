export interface IProductList {
  productId: number;
  isNew: boolean;
  theme: string;
  image: string[];
  productTemplate: string;
  productPackage: string;
  price: number;
  discount?: number;
  portfolio: boolean;
}

export const productList: IProductList[] = [
  {
    productId: 1,
    isNew: true,
    theme: "Elegant & Minimaslist",
    image: [
      "/products/invitation/Premium A - EM 1.png",
      "/products/invitation/Premium B - EM 1.png",
      "/products/invitation/Standart A - EM 1.png",
      "/products/invitation/Standart B - EM 1.png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart A",
    price: 100000,
    discount: 5000,
    portfolio: false,
  },
  {
    productId: 2,
    isNew: false,
    theme: "Elegant & Minimaslist",
    image: [
      "/products/invitation/Premium A - EM 1.png",
      "/products/invitation/Premium B - EM 1.png",
      "/products/invitation/Standart A - EM 1.png",
      "/products/invitation/Standart B - EM 1.png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart A",
    price: 100000,
    discount: 5000,
    portfolio: false,
  },
  {
    productId: 3,
    isNew: false,
    theme: "Elegant & Minimaslist",
    image: [
      "/products/invitation/Premium A - EM 1.png",
      "/products/invitation/Premium B - EM 1.png",
      "/products/invitation/Standart A - EM 1.png",
      "/products/invitation/Standart B - EM 1.png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart A",
    price: 100000,
    discount: 5000,
    portfolio: false,
  },
];
