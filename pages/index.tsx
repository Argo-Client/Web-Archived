import { Navbar, NavbarItem, IconButton } from "../components/Navbar";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import {
	FaHome,
	FaCalendarWeek,
	FaCheckCircle,
	FaSortNumericUpAlt,
	FaFolder,
	FaMapSigns,
	FaFileAlt,
	FaStar,
	FaAtlas,
	FaCog,
	FaEnvelope,
	FaSun,
	FaChevronLeft,
	FaMoon,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Home = () => {
	const { setTheme } = useTheme();
	return (
		<Navbar Icon={MdSchool}>
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
				<IconButton
					Icon={FaEnvelope}
					onClick={() => alert("placeholder")}
					small
				/>
				<IconButton
					Icon={FaCog}
					onClick={() => alert("placeholder")}
					small
				/>
				<IconButton
					Icon={FaSun}
					onClick={() => setTheme("dark")}
					small
					className="dark:hidden"
				/>
				<IconButton
					Icon={FaMoon}
					onClick={() => setTheme("light")}
					small
					className="hidden dark:block"
				/>
				<IconButton
					Icon={FaChevronLeft}
					onClick={() => alert("placeholder")}
					small
				/>
			</div>
		</Navbar>
	);
};

export default Home;
