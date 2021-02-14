import Link from "next/link";

import { IconType } from "react-icons";
import { HTMLAttributes } from "react";
import ArgoLogo from "./Argo";

export function Navbar({ children }: { children: JSX.Element[] }) {
	return (
		<nav className="bg-gray-100 dark:bg-dark-secondary py-4 min-h-screen inline-block w-max relative flex-col ">
			<div className="ml-6">
				<ArgoLogo />
			</div>
			{children}
		</nav>
	);
}

/**
 * A navbar item
 * @param props
 * @param props.href - The link to redirect to
 * @param props.icon - The icon to use
 */
export function NavbarItem({ children, href, Icon }: { children: string; href: string; Icon: IconType }) {
	return (
		<Link href={href}>
			<a>
				<div className="px-5 py-2 mx-2 rounded-md transition duration-200 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-tertiary flex items-center">
					<IconButton Icon={Icon} />
					<span className="text-gray-700 dark:text-gray-200 text-2xl">{children}</span>
				</div>
			</a>
		</Link>
	);
}

interface IconButton extends HTMLAttributes<HTMLButtonElement> {
	Icon: IconType;
	small?: boolean;
	className?: string;
}
/**
 * Create a small button with an icon
 * @param props
 * @param props.small - If the icon should be small
 * @param props.Icon - The icon to use
 * @param props.className - Extra optional classes for the button
 */
export function IconButton({ Icon, small, className = "", ...props }: IconButton) {
	return (
		<button className={`mr-3 focus:outline-none bg-gray-200 p-1 dark:bg-dark-tertiary rounded-full transition duration-200 hover:shadow-md ${className}`} {...props}>
			<Icon className={`${small ? "w-10 h-10 p-3" : "w-11 h-11 p-2.5"} inline-block`} />
		</button>
	);
}
