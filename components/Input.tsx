import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Input({
  placeholder,
  className,
  icon,
  type,
}: {
  placeholder: string;
  className: string;
  icon: IconProp;
  type: string;
}) {
  const classes =
    className +
    " py-2 pl-12 pr-2 block dark:bg-dark-tertiary bg-gray-200 relative shadow-md border-transparent focus:outline-none focus:border-transparent rounded-md";
  return (
    <span className={classes}>
      <FontAwesomeIcon
        icon={icon}
        className="absolute h-full left-3 inset-y-0"
      />
      <input
        spellCheck="false"
        placeholder={placeholder}
        type={type}
        className="bg-transparent focus:outline-none w-full"
      />
    </span>
  );
}
