import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function LoginInput({
  placeholder,
  icon,
  type,
}: {
  placeholder: string;
  icon: IconProp;
  type: string;
}) {
  return (
    <span className="w-full mt-6 h-14 text-xl pt-3 pl-12 pr-2 block input">
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
