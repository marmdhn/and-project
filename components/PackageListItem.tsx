interface Item {
  text: string;
  availableStatus?: boolean;
  children?: (Item | string)[];
}

interface TitleItem {
  text: string;
  availableStatus?: boolean;
}

interface PackageItemProps {
  title: TitleItem;
  items: (Item | string)[];
}

export const PackageListItem: React.FC<PackageItemProps> = ({
  title,
  items = [],
}) => {
  return (
    <div>
      <h1
        className={`font-bold mb-2 ${title.availableStatus ? "" : "line-through"}`}
      >
        {title.text}
      </h1>
      <ul className="flex flex-col gap-2 text-xs">
        {items.map((item, index) => {
          if (typeof item === "string") {
            return <ListItem key={item + index} text={item} />;
          }

          return (
            <ListItem
              key={item.text + index}
              text={item.text}
              availableStatus={item.availableStatus}
            >
              {item.children?.map((child, childIndex) =>
                typeof child === "string" ? (
                  <ListItem key={child + childIndex} text={child} />
                ) : (
                  <ListItem
                    key={child.text + childIndex}
                    text={child.text}
                    availableStatus={child.availableStatus}
                  />
                ),
              )}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

interface ListItemProps {
  text: string;
  availableStatus?: boolean;
  children?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
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
