"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/motionVariants";
import { InvitationPackageData } from "@/data/invitationPackage";
import { ListItem } from "@/app/catalog/ListItem";

export default function CatalogPage() {
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

      <div className="flex flex-wrap justify-center gap-5 py-10">
        {InvitationPackageData.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-sm">
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
                    <ListItem key={feature.text + index} text={feature.text} />
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
    </section>
  );
}
