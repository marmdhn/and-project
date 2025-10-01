interface ListItemProps {
  text: string;
  availableStatus?: boolean;
  children?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  text,
  availableStatus = true,
  children,
}) => {
  return (
    <li className={availableStatus ? "" : "opacity-50"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`size-4 me-2 inline-block text-${
          availableStatus ? "success" : "base-content/50"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {availableStatus ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        )}
      </svg>
      <span className={!availableStatus ? "line-through" : ""}>{text}</span>

      {children && <ul className="ps-6 mt-1">{children}</ul>}
    </li>
  );
};
