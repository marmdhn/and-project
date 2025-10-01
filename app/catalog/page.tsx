"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/motionVariants";
import { InvitationPackageData } from "@/data/invitationPackage";
import { ListItem } from "@/app/catalog/ListItem";
import { useRef, useState } from "react";
import Button from "@/components/Button";

export default function CatalogPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.clientWidth;
    const maxScrollLeft =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    if (scrollLeft < width * 0.25) {
      setActiveIndex(0);
    } else if (scrollLeft > maxScrollLeft - width * 0.25) {
      setActiveIndex(2);
    } else {
      setActiveIndex(1);
    }
  };

  const scrollToIndex = (bulletIndex: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;

    let targetIndex = 0;
    if (bulletIndex === 0) {
      // paling kiri
      targetIndex = 0;
    } else if (bulletIndex === 1) {
      // tengah
      targetIndex = Math.floor(InvitationPackageData.length / 2);
    } else if (bulletIndex === 2) {
      // paling kanan
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

  return (
    <section id="catalog-title" className="page-section">
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

      <div className="flex flex-col items-center justify-center gap-5">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="carousel carousel-center rounded-box space-x-8 p-4"
        >
          {InvitationPackageData.map((item, index) => (
            <div
              key={index}
              className="carousel-item card w-2/5 bg-base-100 shadow-sm"
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

        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Eksklusif</h2>
          </div>

          <div>
            <h1 className="font-bold mb-2">Custom Desain</h1>
            <h1 className="font-bold mb-2">Custom Isi Undangan</h1>
          </div>
          <div className="mt-6">
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
}
