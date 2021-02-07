import Link from "next/link";
import { Navbar, NavbarItem, IconButton } from "./Navbar";
import { useTheme } from "next-themes";

import { FaHome, FaCalendarWeek, FaCheckCircle, FaSortNumericUpAlt, FaFolder, FaMapSigns, FaFileAlt, FaStar, FaAtlas, FaCog, FaEnvelope, FaSun, FaChevronLeft, FaMoon } from "react-icons/fa";

export default function Nav() {
	var { setTheme } = useTheme();
	return (
		<Navbar>
			<NavbarItem href="/" Icon={FaHome}>
				Home
			</NavbarItem>
			<NavbarItem Icon={FaCalendarWeek} href="/agenda">
				Agenda
			</NavbarItem>
			<NavbarItem Icon={FaCheckCircle} href="/afwezigheid">
				Afwezigheid
			</NavbarItem>
			<NavbarItem Icon={FaSortNumericUpAlt} href="/cijfers">
				Cijfers
			</NavbarItem>
			<NavbarItem Icon={FaFolder} href="/bronnen">
				Bronnen
			</NavbarItem>
			<NavbarItem Icon={FaMapSigns} href="/studiewijzers">
				Studiewijzers
			</NavbarItem>
			<NavbarItem Icon={FaFileAlt} href="/opdrachten">
				Opdrachten
			</NavbarItem>
			<NavbarItem Icon={FaStar} href="/activiteiten">
				Activiteiten
			</NavbarItem>
			<NavbarItem Icon={FaAtlas} href="/leermiddelen">
				Leermiddelen
			</NavbarItem>
			<div className="absolute bottom-4 inset-x-0 flex justify-center pl-3">
				<Link href="/login">
					<a>
						<IconButton Icon={FaEnvelope} small />
					</a>
				</Link>
				<IconButton Icon={FaCog} small />
				<IconButton Icon={FaSun} onClick={() => setTheme("dark")} small className="dark:hidden" />
				<IconButton Icon={FaMoon} onClick={() => setTheme("light")} small className="hidden dark:block" />
				<IconButton Icon={FaChevronLeft} small />
			</div>
		</Navbar>
	);
}
