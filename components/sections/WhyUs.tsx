"use client";

import { motion } from "framer-motion";
import {
  itemVariants,
  containerVariants,
  fadeUp,
  fadeUpWhileInView,
} from "@/utils/motionVariants";

interface whyUs {
  title: string;
  text: string;
}
export default function WhyUsSection() {
  const whyUsData: whyUs[] = [
    {
      title: "Desain modern",
      text: "Desain selalu up-to-date, cocok untuk semua device.",
    },
    {
      title: "Fleksibel",
      text: "Layanan dapat disesuaikan dengan kebutuhan anda",
    },
    {
      title: "Terjangkau",
      text: "Harga ramah kantong tanpa mengorbankan kualitas",
    },
    {
      title: "After Service",
      text: "Gratis konsultasi & revisi ringan setelah project selesai",
    },
  ];

  return (
    <section id="why us section" className="section">
      <motion.div variants={fadeUp} {...fadeUpWhileInView} className="mx-auto">
        <h1 className="text-title text-3xl">🤝 Why Us?</h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        {...fadeUpWhileInView}
        className="flex w-full flex-col lg:flex-row"
      >
        {whyUsData.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="flex">
            <div className="grid h-32 text-center">
              <h1 className="text-xl text-primary font-semibold">
                {item.title}
              </h1>
              <h5 className="text-gray">{item.text}</h5>
            </div>
            {index !== whyUsData.length - 1 && (
              <div className="divider divider-primary lg:divider-horizontal" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
