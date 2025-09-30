"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import {
  itemVariants,
  containerVariants,
  fadeUpWhileInView,
} from "@/utils/motionVariants";

export default function CtaSection() {
  return (
    <section id="cta section" className="section">
      <motion.div
        variants={containerVariants}
        {...fadeUpWhileInView}
        className="min-h-[calc(100vh-500px)] flex flex-col items-center justify-center gap-5"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl text-center lg:text-5xl font-bold text-primary"
        >
          🚀 Siap mulai project?
        </motion.h1>
        <motion.span
          variants={itemVariants}
          className="text-gray font-normal text-lg tracking-wide text-center"
        >
          Bangun website & desain keren untuk bisnismu sekarang!
        </motion.span>
        <Button text="Contact Us!" forceText={true} />
      </motion.div>
    </section>
  );
}
