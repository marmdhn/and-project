import { FaCircleArrowRight } from "react-icons/fa6";

interface ButtonProps {
  text: string;
  icon?: boolean;
  onClick?: () => void;
  forceText?: boolean;
}

export default function Button({
  text,
  icon = false,
  onClick,
  forceText = false,
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="bg-secondary p-1 rounded-full flex items-center gap-1 button-hover"
    >
      <button
        className={`btn btn-primary font-medium rounded-full border-0 will-change-transform flex-1 ${forceText ? "inline" : "hidden sm:inline"}`}
      >
        {text}
      </button>
      {icon && <FaCircleArrowRight size="28" className="text-white " />}
    </div>
  );
}
