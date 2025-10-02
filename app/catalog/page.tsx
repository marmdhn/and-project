"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/motionVariants";
import {
  exclusiveInvitationPackage,
  invitationAddOns,
  InvitationPackageData,
} from "@/data/invitationPackage";
import { PackageListItem } from "@/components/PackageListItem";
import { useRef, useState } from "react";
import Button from "@/components/Button";
import { FaUndo } from "react-icons/fa";
import ProductCard from "@/components/ProducCard";

export default function CatalogPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < maxScrollLeft);
  };

  const scrollToIndex = (bulletIndex: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;

    let targetIndex = 0;
    if (bulletIndex === 0) {
      targetIndex = 0;
    } else if (bulletIndex === 1) {
      targetIndex = Math.floor(InvitationPackageData.length / 2);
    } else if (bulletIndex === 2) {
      targetIndex = InvitationPackageData.length - 1;
    }

    const card = container.children[targetIndex] as HTMLElement;
    const scrollLeft =
      card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    setActiveIndex(bulletIndex);
  };

  const filteredData = InvitationPackageData.filter((item) => {
    if (firstSelect && item.title === firstSelect) return true;
    if (secondSelect && item.title === secondSelect) return true;
    return !firstSelect || !secondSelect;
  });

  const resetSelectValue = () => {
    setFirstSelect("");
    setSecondSelect("");
  };

  return (
    <section id="catalog-title" className="page-section gap-5 lg:gap-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-5"
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

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-6">
        <span>Bandingkan</span>
        <select
          value={firstSelect}
          onChange={(e) => setFirstSelect(e.target.value)}
          className="select select-bordered w-60"
        >
          <option value="">Pilih Paket Pertama</option>
          {InvitationPackageData.map((item) => (
            <option key={item.title} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>

        <span>dengan</span>

        <select
          value={secondSelect}
          onChange={(e) => setSecondSelect(e.target.value)}
          className="select select-bordered w-60"
        >
          <option value="">Pilih Paket Kedua</option>
          {InvitationPackageData.map((item) => (
            <option key={item.title} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>

        <button
          className="btn btn-secondary rounded-2xl"
          onClick={resetSelectValue}
        >
          <FaUndo size={15} /> Reset
        </button>
      </div>

      <div className="flex flex-col">
        {(!firstSelect || !secondSelect) && (
          <div className="flex justify-center items-center gap-6 my-4">
            <button
              className="btn btn-circle btn-outline"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={!canScrollPrev}
            >
              ❮
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={!canScrollNext}
            >
              ❯
            </button>
          </div>
        )}

        <div className="flex flex-col items-center justify-center">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="carousel carousel-center rounded-box space-x-8 p-4 mb-20"
          >
            {filteredData.map((item, index) => (
              <div
                key={index}
                className={`carousel-item card bg-base-100 shadow-sm`}
              >
                <div className="card-body">
                  {item.exclusive && (
                    <span className="badge badge-xs badge-secondary">
                      Most Popular
                    </span>
                  )}
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{item.title}</h2>
                  </div>

                  <PackageListItem
                    title={{ text: "Tema Desain", availableStatus: true }}
                    items={item.themes}
                  />

                  <PackageListItem
                    title={{ text: "Isi Undangan", availableStatus: true }}
                    items={item.content}
                  />

                  <PackageListItem
                    title={{ text: "Lainnya", availableStatus: true }}
                    items={item.others}
                  />

                  <PackageListItem
                    title={{
                      text: "Admin Akses",
                      availableStatus: item.adminAccess.status,
                    }}
                    items={item.adminAccess.features}
                  />

                  <PackageListItem
                    title={{ text: "Link Website", availableStatus: true }}
                    items={item.additionalInfo.webUrl}
                  />

                  <PackageListItem
                    title={{ text: "Catatan(*)", availableStatus: true }}
                    items={item.additionalInfo.notes}
                  />
                </div>
              </div>
            ))}
          </div>

          {(!firstSelect || !secondSelect) && (
            <div className="flex flex-col justify-center items-center gap-20 w-full">
              <div className="card w-1/3 bg-base-100 border-4 border-primary animate-glow">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">
                      {exclusiveInvitationPackage.title}
                    </h2>
                    <span className="badge badge-xs badge-warning animate-bounce">
                      Recommended
                    </span>
                  </div>

                  <div>
                    <h1 className="font-bold mb-2">Custom Desain</h1>
                    <h1 className="font-bold">Custom Isi Undangan</h1>
                  </div>

                  <PackageListItem
                    title={{ text: "Admin Akses", availableStatus: true }}
                    items={exclusiveInvitationPackage.adminAccess.features}
                  />

                  <PackageListItem
                    title={{ text: "Link Website", availableStatus: true }}
                    items={exclusiveInvitationPackage.additionalInfo.webUrl}
                  />

                  <PackageListItem
                    title={{ text: "Catatan(*)", availableStatus: true }}
                    items={exclusiveInvitationPackage.additionalInfo.notes}
                  />

                  <div className="mt-6">
                    <Button text="Contact Us" />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 items-center justify-center">
                <h1 className="text-primary font-semibold text-xl">Add Ons</h1>
                <div className="flex flex-col gap-2 w-full">
                  {invitationAddOns.map((addOn, key) => (
                    <div
                      key={key}
                      className="flex items-center justify-between"
                    >
                      <span>{addOn.name}</span>
                      <span className="flex-1 mx-2 border-b border-dotted border-gray-400"></span>
                      <span>Rp {addOn.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ProductCard />
    </section>
  );
}
