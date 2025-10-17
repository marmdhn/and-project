export interface IProductFilter {
  category: string;
  filter?: {
    binding: keyof IProductList;
    data: string[];
  };
}

export const productCategoryWithFilters: IProductFilter[] = [
  {
    category: "All",
  },
  {
    category: "Catalog Website",
  },
  {
    category: "Portfolio Website",
  },
  {
    category: "Invitation Website",
    filter: {
      binding: "theme",
      data: [
        "Elegant & Minimalist",
        "Floral & Pastel",
        "Glam & luxury",
        "Nature / Rustic",
        "Illustrasi / Kartun",
        "Tradisional / Cultural",
      ],
    },
  },
  {
    category: "Branding Kit Design",
  },
  {
    category: "Presentation Slide Design",
  },
  {
    category: "Invitation Design Design",
  },
  {
    category: "Catalog Design Design",
  },
];

export interface IProductList {
  productId: number;
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

export const productData: IProductList[] = [
  {
    productId: 1,
    isNew: true,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/Cover (Standart A - EM 1).png",
      "/products/invitation/Mobile (Standart A - EM 1).png",
      "/products/invitation/Web (Standart A - EM 1).png",
      "/products/invitation/Tab (Standart A - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart A",
    price: 100000,
    discount: 5000,
    category: "invitation website",
    portfolio: false,
  },
  {
    productId: 2,
    isNew: false,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/Cover (Standart B - EM 1).png",
      "/products/invitation/Mobile (Standart B - EM 1).png",
      "/products/invitation/Web (Standart B - EM 1).png",
      "/products/invitation/Tab (Standart B - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart B",
    price: 100000,
    discount: 5000,
    category: "invitation website",
    portfolio: false,
  },
  {
    productId: 3,
    isNew: false,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/Cover (Standart C - EM 1).png",
      "/products/invitation/Mobile (Standart C - EM 1).png",
      "/products/invitation/Web (Standart C - EM 1).png",
      "/products/invitation/Tab (Standart C - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart C",
    price: 100000,
    discount: 5000,
    category: "invitation website",
    portfolio: false,
  },
  {
    productId: 4,
    isNew: false,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/Cover (Premium A - EM 1).png",
      "/products/invitation/Mobile (Premium A - EM 1).png",
      "/products/invitation/Web (Premium A - EM 1).png",
      "/products/invitation/Tab (Premium A - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Premium A",
    price: 100000,
    discount: 5000,
    category: "invitation website",
    portfolio: false,
  },
];
