import { IProductList } from "@/data/productList";
import ProductCard from "@/components/ProducCard";

interface ProductCardProps {
  product: IProductList[];
}

export default function ProductList({ product }: ProductCardProps) {
  const filter = [
    " Elegant & Minimalist",
    "Floral & Pastel",
    "Glam & luxury",
    "Nature / Rustic",
    "Illustrasi / Kartun",
    "Tradisional / Cultural",
  ];
  return (
    <div className="card">
      <div className="card-body flex flex-col gap-5">
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          {filter.map((item, key) => (
            <input
              key={key}
              className="btn"
              type="radio"
              name="frameworks"
              aria-label={item}
            />
          ))}
        </form>
        <div className="grid grid-cols-3 gap-8">
          {product.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
