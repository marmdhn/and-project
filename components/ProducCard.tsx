import Button from "@/components/Button";
import HoverGallery from "@/components/HoverGallery";
import Link from "next/link";
import { IProductList } from "@/types/product";

interface ProductCardProps {
  previewDirectUrl?: string;
  product: IProductList;
}
export default function ProductCard({
  product,
  previewDirectUrl,
}: ProductCardProps) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex justify-between items-center m-2">
        <div className="badge badge-outline text-gray">{product.theme}</div>
        {product.isNew && (
          <div className="badge badge-secondary font-bold animate-pulse">
            NEW
          </div>
        )}
      </div>
      <figure className="p-2">
        <HoverGallery images={product.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.productTemplate} | {product.productPackage}
        </h2>
        <div>
          <span
            className={`text-sm ${product.discount && "line-through"} text-error`}
          >
            Rp {product.price.toLocaleString()}
          </span>
          {product.discount && (
            <span className="ms-2 text-lg font-semibold text-gray">
              Rp {(product.price - product.discount).toLocaleString()}
            </span>
          )}
        </div>
        <div className="card-actions justify-between items-center">
          <Link href={previewDirectUrl || ""}>
            <button className="px-3 py-1 bg-primary text-white rounded-xl transition-colors hover:bg-primary/80">
              Preview
            </button>
          </Link>
          <div
            className={!product.portfolio ? "tooltip" : ""}
            data-tip="Belum Ada Portfolio"
          >
            <Button
              disabled={!product.portfolio}
              text="Portfolio"
              type="link"
              style="underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
