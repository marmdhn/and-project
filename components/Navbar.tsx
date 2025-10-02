"use client";

import Button from "./Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink, scroller } from "react-scroll";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type ScrollTarget = {
  id: string;
  title: string;
  type: "path" | "section";
};

const sections: ScrollTarget[] = [
  {
    id: "about-us",
    title: "About Us",
    type: "path",
  },
  {
    id: "service",
    title: "Services",
    type: "section",
  },
  {
    id: "catalog",
    title: "Catalog",
    type: "path",
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasShadow, setHasShadow] = useState(false);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  const containerNavbarAnimate = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemNavbarAnimate = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleNavigation = (to: string) => {
    if (pathname !== "/" || to === "service") {
      setScrollTarget(to);
      router.push("/");
    } else {
      scroller.scrollTo(to, { duration: 750, smooth: true, offset: -100 });
    }
  };

  useEffect(() => {
    if (scrollTarget && pathname === "/") {
      scroller.scrollTo(scrollTarget, {
        duration: 750,
        smooth: true,
        offset: -100,
      });
    }
  }, [pathname, scrollTarget]);

  // Scroll hide/show & shadow
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasShadow(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -130 : 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar pt-5 fixed top-0 left-0 w-full bg-base-100 z-50 ${
        hasShadow ? "shadow-md" : "shadow-none"
      } px-10 lg:px-20`}
    >
      <div className="navbar-start w-full">
        <button
          onClick={() => handleNavigation("/")}
          className="text-xl cursor-pointer me-auto lg:ms-0"
        >
          <Image
            src="/logo.svg"
            width={96}
            height={96}
            className="w-12 lg:w-24 h-auto"
            alt="logo"
          />
        </button>

        {/* Dropdown Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {sections.map((item) => (
              <motion.li
                key={item.id}
                variants={itemNavbarAnimate}
                className="navbar-item"
              >
                {item.type === "section" ? (
                  <ScrollLink
                    to={item.id}
                    smooth
                    duration={500}
                    spy
                    offset={-100}
                    activeClass={pathname === "/" ? "navbar-item-active" : ""}
                    onClick={() => handleNavigation(item.id)}
                    className="navbar-item-hover cursor-pointer"
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => router.push("/" + item.id)}
                    className={`navbar-item-hover ${pathname === "/" + item.id ? "navbar-item-active" : ""}`}
                  >
                    {item.title}
                  </button>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navbar Desktop */}
      <motion.div
        variants={containerNavbarAnimate}
        initial="hidden"
        animate="visible"
        className="navbar-end hidden lg:flex lg:w-full"
      >
        <ul className="menu menu-horizontal px-1 mx-2 text-primary [&>li>*]:!bg-transparent [&>li>*]:!text-primary">
          {sections.map((item) => (
            <motion.li
              key={item.id}
              variants={itemNavbarAnimate}
              className="navbar-item"
            >
              {item.type === "section" ? (
                <ScrollLink
                  to={item.id}
                  smooth
                  duration={500}
                  spy
                  offset={-100}
                  activeClass={
                    pathname === "/" && scrollTarget !== "/"
                      ? "navbar-item-active"
                      : ""
                  }
                  onClick={() => handleNavigation(item.id)}
                  className="navbar-item-hover cursor-pointer"
                >
                  {item.title}
                </ScrollLink>
              ) : (
                <button
                  onClick={() => router.push("/" + item.id)}
                  className={`navbar-item-hover ${pathname === "/" + item.id ? "navbar-item-active" : ""}`}
                >
                  {item.title}
                </button>
              )}
            </motion.li>
          ))}
        </ul>

        <motion.div variants={itemNavbarAnimate}>
          <Button text="Get Started" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
