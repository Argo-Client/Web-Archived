import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

/**
 * @component
 * @param NavbarItem
 */
export function Navbar({
  children,
  icon,
}: {
  children: JSX.Element[];
  icon: string;
}) {
  return (
    <>
      <ul className="bg-gray-100 inline-block dark:bg-dark-secondary py-4 w-72 min-h-screen">
        <div className="ml-6">
          <Image
            src={icon}
            alt=""
            width={64}
            height={64}
            className="bg-blue-500 rounded-full shadow-md"
          />
        </div>

        {children}
      </ul>
    </>
  );
}

/**
 * A navbar item
 */
export function NavbarItem({
  children,
  href,
  icon,
}: {
  children: any;
  href: string;
  icon: IconProp;
}) {
  return (
    <Link href={href}>
      <li className="dark:text-white cursor-pointer text-gray-600 hover:bg-gray-200 py-2 m-2 pl-6 text-2xl rounded-md dark:hover:bg-dark-tertiary dark:hover:text-gray-200">
        <button className="w-12 h-12 mr-4 inline-block bg-gray-200 dark:bg-dark-tertiary rounded-full shadow-md">
          <FontAwesomeIcon icon={icon} />
        </button>
        <span className="text-gray-700 dark:text-gray-200">{children}</span>
      </li>
    </Link>
  );
}

/**
 * Create a small button with an icon
 * @param Icon
 * @param href
 */
export function NavbarButton(
  { icon, action },
  { icon: IconProp, action: Function }
) {
  return (
    <button
      className="focus:outline-none p-1 w-12 mr-3 h-12 bg-gray-200 dark:bg-dark-tertiary rounded-full shadow-md"
      onClick={action}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
