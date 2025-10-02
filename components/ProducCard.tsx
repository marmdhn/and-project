import Button from "@/components/Button";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          width={96}
          height={96}
          className="w-full"
          src="/illustration/coming_soon.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-between items-center">
          <span className="text-xl">Rp {(15000).toLocaleString()}</span>
          <Button text="Buy Now" />
        </div>
      </div>
    </div>
  );
}
