import { FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon?: boolean;
  onClick?: () => void;
  forceText?: boolean;
  type?: "button" | "link";
  href?: string;
  style?: "button" | "underline";
  disabled?: boolean;
}

export default function Button({
  text,
  icon = false,
  onClick,
  forceText = false,
  type = "button",
  href,
  style = "button",
  disabled = false,
}: ButtonProps) {
  const buttonEl = (
    <div
      onClick={type === "button" && !disabled ? onClick : undefined}
      className={`${
        style === "button"
          ? "bg-secondary p-1 rounded-full flex items-center gap-1 button-hover"
          : "btn-underline"
      }${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <button
        type="button"
        className={`${style === "button" ? "btn btn-primary font-medium !rounded-full border-0 will-change-transform flex-1" : ""} ${forceText ? "inline" : "hidden sm:inline"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {text}
      </button>
      {icon && <FaCircleArrowRight size={28} className="text-white" />}
    </div>
  );

  if (type === "link" && href) {
    return (
      <Link
        href={href}
        className={`inline-block ${
          disabled ? "pointer-events-none opacity-50" : "cursor-pointer"
        }`}
      >
        {buttonEl}
      </Link>
    );
  }

  return buttonEl;
}
