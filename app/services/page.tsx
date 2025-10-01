"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ITabs, tabs } from "@/data/services";
import { containerVariants, itemVariants } from "@/utils/motionVariants";
import Button from "@/components/Button";
import Image from "next/image";

export default function ServicesPage() {
  const [isFirst, setIsFirst] = useState(true);
  const [active, setActive] = useState("Website");
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeTab: ITabs | undefined = tabs.find((tab) => tab.title === active);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.title === active);
    const el = tabRefs.current[activeIndex];
    if (el) {
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  useEffect(() => {
    const timer = setTimeout(() => setIsFirst(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="service" className="page-section gap-10 lg:gap-20">
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
          🛠️ Services We Provide
        </motion.h1>
        <motion.img
          className="w-2/3 lg:w-full"
          variants={itemVariants}
          src="/ornaments/skretch-title.svg"
          alt="skretch title"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.2 }}
        className="lg:w-5xl relative flex items-center justify-center bg-secondary p-2 rounded-full"
      >
        <motion.div
          className="absolute top-2 bottom-2 rounded-full bg-primary"
          initial={{ left: 0, width: 0 }}
          animate={pillStyle}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: isFirst ? 0.8 : 0,
          }}
        />

        {tabs.map((tab, i) => (
          <motion.button
            variants={itemVariants}
            key={tab.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => setActive(tab.title)}
            className={`relative z-10 w-auto px-3 text-xs lg:text-lg lg:w-3xs py-2 rounded-full transition-colors 
              ${active === tab.title ? "text-white" : "text-gray-200"}
            `}
          >
            {tab.title}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab?.title + "-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center text-lg max-w-6xl"
        >
          {activeTab && (
            <div className="flex flex-col items-center justify-center gap-5 px-5">
              <h1 className="text-4xl font-bold text-primary">
                {activeTab.title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-2 text-lg text-gray-500">
                <span className="text-gray text-sm lg:text-lg">
                  {activeTab.text1}
                </span>
                <span className="bg-primary text-white font-medium px-4 py-2 rounded-full text-xs lg:text-lg">
                  {activeTab.highlight}
                </span>
                <span className="text-gray text-sm lg:text-lg">
                  {activeTab.text2}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          key={activeTab?.title + "-accordion"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {activeTab && (
            <div className="join join-vertical bg-base-100 w-full lg:w-5xl shadow-lg">
              {activeTab.services.map((service, index: number) => (
                <div
                  key={index}
                  className="collapse collapse-arrow join-item border-base-300 border"
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    defaultChecked={index === 0}
                  />
                  <div className="collapse-title font-medium">
                    {service.title}
                  </div>

                  <div className="collapse-content text-sm text-gray">
                    <div
                      className={`flex justify-between items-center ${service.portfolio && "mb-4"}`}
                    >
                      <p>{service.description}</p>
                      {service.hasPriceList && (
                        <div>
                          <Button text="Price List" />
                        </div>
                      )}
                    </div>
                    {service.portfolio && service.portfolio.length > 0 && (
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.portfolio.map((portfolio, index: number) => (
                          <div
                            key={index}
                            className="card bg-base-100 shadow-sm"
                          >
                            <figure>
                              <Image
                                width={96}
                                height={96}
                                src={portfolio.coverUrl}
                                alt="cover"
                                className="w-1/2 lg:w-full"
                              />
                            </figure>
                            <div className="card-body flex flex-col gap-0">
                              <h2 className="card-title text-sm lg:text-lg">
                                {portfolio.title}
                              </h2>
                              <p className="text-xs lg:text-sm">
                                {portfolio.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
