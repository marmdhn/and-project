import Button from "../Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Portfolio {
  title: string;
  img: string;
  categories: string[];
  text: string;
  redirect?: string;
}
export default function PortfolioSection() {
  const portfolioData: Portfolio[] = [
    {
      title: "Portfolio 1",
      img: "/portfolio/portfolio_1.png",
      categories: ["UI/UX Design", "Website"],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      redirect: "/kataKopi",
    },
    {
      title: "Portfolio 2",
      img: "/portfolio/portfolio_1.png",
      categories: ["UI/UX Design", "Website"],
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      redirect: "/kataKopi",
    },
  ];
  return (
    <section id="portfolio section" className="section">
      <div className="flex items-center justify-between">
        <h1 className="text-title text-3xl">🎨 Our Portfolio</h1>
        <Button text="View All" icon={true} />
      </div>

      <div className="px-10">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-between items-center w-full`}
          >
            <Image
              width={96}
              height={96}
              src={item.img}
              alt="portfolio image"
              className="w-1/2"
            />
            <div
              className={`flex flex-col justify-center ${index % 2 === 0 ? "items-end" : "items-start"} gap-2 w-1/2`}
            >
              <h1 className="text-title text-3xl">{item.title}</h1>
              <div className="flex gap-2">
                {item.categories.map((item, index) => (
                  <span key={index} className="badge badge-primary">
                    {item}
                  </span>
                ))}
              </div>
              <h5 className="text-lg text-gray">{item.text}</h5>
              {item.redirect && (
                <Link href={item.redirect}>
                  <FaExternalLinkAlt className="text-gray cursor-pointer hover:text-primary" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
