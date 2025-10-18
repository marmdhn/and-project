import { IProductFilter, IProductList } from "@/types/product";

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

export const productData: IProductList[] = [
  {
    productId: 1,
    productSlug: "premium-b-em-1",
    isNew: true,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/cover/Cover (Standart A - EM 1).png",
      "/products/invitation/cover/Mobile (Standart A - EM 1).png",
      "/products/invitation/cover/Web (Standart A - EM 1).png",
      "/products/invitation/cover/Tab (Standart A - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart A",
    price: 100000,
    discount: 5000,
    category: "invitation",
    portfolio: false,
  },
  {
    productId: 2,
    productSlug: "premium-b-em-1",
    isNew: false,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/cover/Cover (Standart B - EM 1).png",
      "/products/invitation/cover/Mobile (Standart B - EM 1).png",
      "/products/invitation/cover/Web (Standart B - EM 1).png",
      "/products/invitation/cover/Tab (Standart B - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart B",
    price: 100000,
    discount: 5000,
    category: "invitation",
    portfolio: false,
  },
  {
    productId: 3,
    productSlug: "premium-b-em-1",
    isNew: false,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/cover/Cover (Standart C - EM 1).png",
      "/products/invitation/cover/Mobile (Standart C - EM 1).png",
      "/products/invitation/cover/Web (Standart C - EM 1).png",
      "/products/invitation/cover/Tab (Standart C - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Standart C",
    price: 100000,
    discount: 5000,
    category: "invitation",
    portfolio: false,
  },
  {
    productId: 4,
    productSlug: "premium-b-em-1",
    isNew: false,
    theme: "Elegant & Minimalist",
    image: [
      "/products/invitation/cover/Cover (Premium A - EM 1).png",
      "/products/invitation/cover/Mobile (Premium A - EM 1).png",
      "/products/invitation/cover/Web (Premium A - EM 1).png",
      "/products/invitation/cover/Tab (Premium A - EM 1).png",
    ],
    productTemplate: "EM 1",
    productPackage: "Premium A",
    price: 100000,
    discount: 5000,
    category: "invitation",
    portfolio: false,
  },
];
