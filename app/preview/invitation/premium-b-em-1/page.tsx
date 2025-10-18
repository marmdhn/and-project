import { FaEnvelope, FaQrcode } from "react-icons/fa6";
import Image from "next/image";

export default function PreviewCatalogPremiumBPage() {
  return (
    <section id="preview-detail" className="bg-[#ECE9E6] max-w-xl mx-auto p-5">
      <div className="min-h-[calc(100vh-40px)] flex flex-col items-center gap-10">
        <div
          className="h-[calc(100vh-310px)] w-full rounded-xl shadow-xl flex flex-col justify-end bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/products/invitation/preview-asset/Premium B - EM 1 - Cover.png')",
          }}
        >
          <div className="bg-black/30 flex flex-col m-5 lg:m-10 p-2 lg:p-5 text-white">
            <span className="text-title text-xl lg:text-4xl !text-white tracking-[10]">
              ANTON
            </span>
            <span className="text-center text-xl lg:text-4xl !text-white">
              &
            </span>
            <span className="text-title text-xl lg:text-4xl text-end !text-white tracking-[10]">
              DISYA
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center max-w-sm text-center">
          <span>Yth. Bapak/Ibu/Saudara/i</span>
          <span className="text-title">Aura Meva</span>
          <span>
            Dengan hormat, kami mengundang Anda untuk menghadiri acara kami.
          </span>
          <button className="btn btn-primary hover:scale-105 transition-all duration-300 ease-in-out will-change-transform">
            <FaEnvelope /> Buka Undangan
          </button>

          <div className="flex gap-2">
            <button className="btn btn-outline hover:bg-primary hover:text-white">
              <FaQrcode /> QR Masuk
            </button>
            <button className="btn btn-outline hover:bg-primary hover:text-white">
              <FaQrcode />
              QR Souvenir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
