"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/motionVariants";
import InvitationPackage from "@/app/catalog/InvitationPackage";
import { useState } from "react";
import ProductList from "@/app/catalog/productList";
import { productCategoryWithFilters, productData } from "@/data/productData";

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const availableInfo: Record<string, boolean> = {
    "Invitation Website": true,
  };
  const isInfoAvailable = availableInfo[activeFilter];

  const handleFilterClick = (filter: string) => {
    setActiveInfo(null);
    setActiveFilter(filter);
  };

  const filteredProducts =
    activeFilter === "All"
      ? productData
      : productData.filter(
          (product) =>
            product.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  const activeCategoryFilter = productCategoryWithFilters.find(
    (item) => item.category === activeFilter,
  )?.filter;

  return (
    <section id="catalog-title" className="page-section gap-5 lg:gap-12">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-5 mb-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl lg:text-5xl text-title"
        >
          🛒 Our Catalog
        </motion.h1>
        <motion.img
          className="w-full"
          variants={itemVariants}
          src="/ornaments/skretch-title.svg"
          alt="skretch title"
        />
      </motion.div>

      {/* Kategori */}
      <div className="flex flex-wrap justify-center gap-4">
        {productCategoryWithFilters.map((filter) => (
          <div
            key={filter.category}
            onClick={() => handleFilterClick(filter.category)}
            className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${
              activeFilter === filter.category
                ? "bg-secondary text-white border border-secondary"
                : "text-gray border border-gray-300 hover:bg-secondary hover:!text-white"
            }`}
          >
            {filter.category}
          </div>
        ))}
      </div>

      <div
        className={!isInfoAvailable ? "tooltip" : ""}
        data-tip="Informasi Belum Tersedia"
      >
        <button
          disabled={!isInfoAvailable}
          onClick={() =>
            setActiveInfo((prev) =>
              prev === activeFilter ? null : activeFilter,
            )
          }
          className={`px-4 py-2 text-gray rounded-md transition-all duration-200 border ${
            !isInfoAvailable
              ? "cursor-not-allowed bg-gray-200 text-gray-500 border-gray-300"
              : "cursor-pointer border-gray-300 hover:bg-secondary hover:text-white hover:border-secondary"
          }`}
        >
          Info Fitur & Add Ons
        </button>
      </div>

      {activeInfo === "Invitation Website" && <InvitationPackage />}

      <ProductList product={filteredProducts} filter={activeCategoryFilter} />
    </section>
  );
}
