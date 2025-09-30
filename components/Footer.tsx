import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-300 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Portfolio</a>
        <a className="link link-hover">Pricing</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaInstagram size="28" className="text-primary button-hover" />
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="text-primary font-bold">AND Project</span>
        </p>
      </aside>
    </footer>
  );
}
