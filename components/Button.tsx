import { FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon?: boolean;
  onClick?: () => void;
  forceText?: boolean;
  type?: "button" | "link";
  href?: string;
}

export default function Button({
  text,
  icon = false,
  onClick,
  forceText = false,
  type = "button",
  href,
}: ButtonProps) {
  const buttonEl = (
    <div
      onClick={type === "button" ? onClick : undefined}
      className="bg-secondary p-1 rounded-full flex items-center gap-1 button-hover"
    >
      <button
        type="button"
        className={`btn btn-primary font-medium rounded-full border-0 will-change-transform flex-1 ${forceText ? "inline" : "hidden sm:inline"}`}
      >
        {text}
      </button>
      {icon && <FaCircleArrowRight size={28} className="text-white" />}
    </div>
  );

  if (type === "link" && href) {
    return (
      <Link href={href} className="inline-block">
        {buttonEl}
      </Link>
    );
  }

  return buttonEl;
}
