"use client";

import { IProductList } from "@/data/productData";
import ProductCard from "@/components/ProducCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/motionVariants";

interface ProductCardProps {
  product: IProductList[];
  filter?: { binding: keyof IProductList; data: string[] };
}

export default function ProductList({ product, filter }: ProductCardProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProducts =
    filter?.binding && activeFilter
      ? product.filter((item) => String(item[filter.binding]) === activeFilter)
      : product;
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">
        {filter?.data && filter.data.length > 0 && (
          <form className="filter">
            <input
              className="btn btn-square"
              type="reset"
              value="×"
              onClick={() => setActiveFilter(null)}
            />
            {filter?.data.map((item, key) => (
              <input
                key={key}
                className="btn"
                type="radio"
                name="frameworks"
                aria-label={item}
                onChange={() => setActiveFilter(item)}
              />
            ))}
          </form>
        )}
        <motion.div
          className="grid grid-cols-4 gap-8 min-h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, key) => (
              <motion.div key={key} variants={itemVariants}>
                <ProductCard
                  product={product}
                  previewDirectUrl={"catalog/preview"}
                />
              </motion.div>
            ))
          ) : (
            <>
              <motion.div
                variants={itemVariants}
                className="h-[500px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 col-span-full"
              >
                Coming Soon
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
