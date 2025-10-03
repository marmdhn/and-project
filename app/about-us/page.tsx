"use client";

import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { containerVariants, itemVariants } from "@/utils/motionVariants";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section id="about-us" className="page-section py-30 lg:py-48 lg:px-16">
      <div className="px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/3 flex flex-col items-start justify-center gap-5 order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-title text-3xl lg:text-4xl hidden lg:block"
            >
              👤 About Us
            </motion.h1>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 text-base lg:text-lg text-gray text-justify"
            >
              <motion.p variants={itemVariants}>
                Kami adalah And — tim kreatif yang fokus menghadirkan solusi
                digital sederhana namun berdampak. Berawal dari keyakinan bahwa
                setiap brand memiliki cerita unik, kami hadir untuk membantu
                menampilkan cerita itu dengan cara yang paling tepat dan
                menarik.
              </motion.p>
              <motion.p variants={itemVariants}>
                Mulai dari membangun website yang profesional dan responsif,
                merancang pengalaman UI/UX yang nyaman digunakan, hingga
                menciptakan desain visual dan konten yang kuat secara estetik
                maupun pesan, kami percaya digital bukan hanya soal tampilan,
                tetapi juga bagaimana ia bisa benar-benar memberi nilai untuk
                bisnis maupun personal brand.
              </motion.p>
              <motion.p variants={itemVariants}>
                Dengan pendekatan yang kolaboratif, kami selalu mendengarkan
                kebutuhan klien, memahami visi mereka, lalu menerjemahkannya
                menjadi solusi kreatif yang mudah digunakan, modern, dan relevan
                dengan audiens. Bagi kami, kesederhanaan adalah kunci, karena
                dari kesederhanaan itulah lahir karya yang autentik, mudah
                dipahami, dan berdampak nyata.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-1/3 flex flex-col justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
          >
            <h1 className="text-title text-3xl lg:text-4xl block lg:hidden">
              👤 About Us
            </h1>
            <Image
              width={96}
              height={96}
              src="/illustration/about_us.svg"
              alt="about us"
              className="max-w-xs lg:max-w-sm w-full h-auto"
            />
          </motion.div>
        </div>

        <div className="card w-full mt-16">
          <div className="card-body px-4 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/3 text-title text-3xl lg:text-5xl flex items-center gap-3">
                <FaPhone className="stext-primary" />
                <span>Contact Us</span>
              </div>

              <fieldset className="fieldset w-full lg:w-2/3 gap-5">
                <InputField label="Name" type="text" placeholder="Name" />
                <InputField label="Email" type="email" placeholder="Email" />
                <InputField
                  label="Your Message"
                  as="textarea"
                  placeholder="Your Message"
                />
                <Button text="Send to Whatsapp" />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
