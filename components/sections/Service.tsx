"use client";

import Button from "../Button";
import { motion } from "framer-motion";
import {
  itemVariants,
  containerVariants,
  fadeUp,
  fadeUpWhileInView,
} from "@/utils/motionVariants";

interface Service {
  title: string;
  img: string;
  subTitle: string;
}
export default function ServiceSection() {
  const serviceData: Service[] = [
    {
      title: "Website",
      img: "/illustration/website_illustration.svg",
      subTitle: `🚀 Online-kan bisnismu dengan<br/>website profesional & responsif.`,
    },
    {
      title: "UI/UX Design",
      img: "/illustration/ui_illustration.svg",
      subTitle: `✨ Desain yang modern, simple, <br/>dan bikin user betah.`,
    },
    {
      title: "Graphic Design",
      img: "/illustration/graphic_illustration.svg",
      subTitle: `🎨 Visual keren untuk poster, banner, <br/>& konten sosial mediamu.`,
    },
    {
      title: "Custom",
      img: "/illustration/custom_illustration.svg",
      subTitle: `⚡ Solusi kreatif fleksibel, <br/>sesuai kebutuhan brand kamu.`,
    },
  ];

  return (
    <section id="service" className="section">
      <motion.div
        className="flex items-center justify-between"
        variants={fadeUp}
        {...fadeUpWhileInView}
      >
        <h1 className="text-title text-xl lg:text-3xl">
          🛠️ Services We Provide
        </h1>
        <Button
          text="View Detail Services"
          icon={true}
          type="link"
          href="/services"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        {...fadeUpWhileInView}
        className="px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-15 justify-center"
      >
        {serviceData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card text-center"
          >
            <div className="card-body">
              <h2 className="card-title mx-auto text-xl lg:text-2xl">
                {item.title}
              </h2>
              <img
                className="w-50 h-50 mx-auto"
                src={item.img}
                alt="Illustration"
              />
              <p
                className="text-gray tracking-wide text-sm lg:text-lg flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: item.subTitle }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
