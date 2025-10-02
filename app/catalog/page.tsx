"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/motionVariants";
import {
  exclusiveInvitationPackage,
  InvitationPackageData,
} from "@/data/invitationPackage";
import { ListItem } from "@/app/catalog/ListItem";
import { useRef, useState } from "react";
import Button from "@/components/Button";
import { FaUndo } from "react-icons/fa";

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

    // kalau scrollLeft > 0 artinya bisa scroll ke kiri
    setCanScrollPrev(scrollLeft > 0);
    // kalau belum nyampe max scroll, masih bisa scroll ke kanan
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

                  <div>
                    <h1 className="font-bold mb-2">Tema Desain</h1>
                    <ul className="flex flex-col gap-2 text-xs">
                      {item.themes.map((theme, index) => (
                        <ListItem
                          key={theme.text + index}
                          text={theme.text}
                          availableStatus={theme.availableStatus}
                        />
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h1 className="font-bold mb-2">Isi Undangan</h1>
                    <ul className="flex flex-col gap-2 text-xs">
                      {item.content.map((content, index) => (
                        <ListItem
                          key={content.text + index}
                          text={content.text}
                          availableStatus={content.availableStatus}
                        >
                          {content.children?.map((child, childIndex) => (
                            <ListItem
                              key={child.text + childIndex}
                              text={child.text}
                              availableStatus={child.availableStatus}
                            />
                          ))}
                        </ListItem>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h1 className="font-bold mb-2">Lainnya</h1>
                    <ul className="flex flex-col gap-2 text-xs">
                      {item.others.map((other, index) => (
                        <ListItem key={other + index} text={other} />
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h1
                      className={`font-bold mb-2 ${item.adminAccess.status ? "" : "line-through"}`}
                    >
                      Admin Akses
                    </h1>
                    <ul className="flex flex-col gap-2 text-xs">
                      {item.adminAccess.features.map((feature, index) => (
                        <ListItem
                          key={feature.text + index}
                          text={feature.text}
                        />
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h1 className="font-bold mb-2">Link Website</h1>
                    <ul className="flex flex-col gap-2 text-xs">
                      {item.additionalInfo.webUrl.map((webUrl, index) => (
                        <ListItem key={webUrl + index} text={webUrl} />
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h1 className="font-bold mb-2">Catatan(*)</h1>
                    <ul className="flex flex-col gap-2 text-xs">
                      {item.additionalInfo.notes.map((note, index) => (
                        <ListItem key={note + index} text={note} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {(!firstSelect || !secondSelect) && (
            <div className="card w-2/5 bg-base-100 border-4 border-primary animate-glow">
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

                <div>
                  <h1 className={`font-bold mb-2`}>Admin Akses</h1>
                  <ul className="flex flex-col gap-2 text-xs">
                    {exclusiveInvitationPackage.adminAccess.features.map(
                      (feature, index) => (
                        <ListItem
                          key={feature.text + index}
                          text={feature.text}
                        />
                      ),
                    )}
                  </ul>
                </div>

                <div>
                  <h1 className="font-bold mb-2">Link Website</h1>
                  <ul className="flex flex-col gap-2 text-xs">
                    {exclusiveInvitationPackage.additionalInfo.webUrl.map(
                      (webUrl, index) => (
                        <ListItem key={webUrl + index} text={webUrl} />
                      ),
                    )}
                  </ul>
                </div>

                <div>
                  <h1 className="font-bold mb-2">Catatan(*)</h1>
                  <ul className="flex flex-col gap-2 text-xs">
                    {exclusiveInvitationPackage.additionalInfo.notes.map(
                      (note, index) => (
                        <ListItem key={note + index} text={note} />
                      ),
                    )}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button text="Contact Us" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
