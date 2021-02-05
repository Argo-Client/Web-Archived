import Link from "next/link";

import { IconType } from "react-icons";
import { HTMLAttributes } from "react";

/**
 * @component
 * @param NavbarItem
 */

export function Navbar({
	children,
	Icon,
}: {
	children: JSX.Element[];
	Icon: IconType;
}) {
	return (
		<nav className="bg-gray-100 dark:bg-dark-secondary py-4 min-h-screen w-max relative flex-col ">
			<div className="min-w-max ml-6">
				<div className="bg-blue-500 rounded-full shadow-md inline-block">
					<Icon className="w-16 h-16 m2 p-2.5 text-white" />
				</div>
			</div>
			{children}
		</nav>
	);
}

/**
 * A navbar item
 */
interface IconButton extends HTMLAttributes<HTMLButtonElement> {
	Icon: IconType;
	small?: boolean;
}
export function NavbarItem({
	children,
	href,
	Icon,
}: {
	children: any;
	href: string;
	Icon: IconType;
}) {
	return (
		<Link href={href}>
			<a>
				<div className="px-6 py-2 m-2 rounded-md text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-tertiary">
					<div className="text-2xl">
						<IconButton Icon={Icon} />
						<span className="text-gray-700 dark:text-gray-200">
							{children}
						</span>
					</div>
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
 */
export function IconButton({
	Icon,
	small,
	className = "",
	...props
}: IconButton) {
	return (
		<button
			className={`mr-3 focus:outline-none bg-gray-200 dark:bg-dark-tertiary rounded-full shadow-md ${className}`}
			{...props}
		>
			<Icon
				className={`${
					small ? "w-10 h-10 p-3" : "w-11 h-11 p-2.5"
				} inline-block`}
			/>
		</button>
	);
}
