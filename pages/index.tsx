import { Navbar, NavbarItem, NavbarButton } from "../components/Navbar";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import {
  faHome,
  faCalendarWeek,
  faCheckCircle,
  faSortNumericUpAlt,
  faFolder,
  faMapSigns,
  faFileAlt,
  faStar,
  faCog,
  faEnvelope,
  faSun,
  faChevronLeft,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  var { theme, setTheme } = useTheme();
  return (
    <>
      <Navbar icon="/logo.png">
        <NavbarItem href="/" icon={faHome}>
          Home
        </NavbarItem>
        <NavbarItem icon={faCalendarWeek} href="/">
          Agenda
        </NavbarItem>
        <NavbarItem icon={faCheckCircle} href="/afwezigheid">
          Afwezigheid
        </NavbarItem>
        <NavbarItem icon={faSortNumericUpAlt} href="/cijfers">
          Cijfers
        </NavbarItem>
        <NavbarItem icon={faFolder} href="/bronnen">
          Bronnen
        </NavbarItem>
        <NavbarItem icon={faMapSigns} href="/studiewijzers">
          Studiewijzers
        </NavbarItem>
        <NavbarItem icon={faFileAlt} href="/opdrachten">
          Opdrachten
        </NavbarItem>
        <NavbarItem icon={faStar} href="/activiteiten">
          Activiteiten
        </NavbarItem>
        <div className="absolute bottom-4 left-0 pl-4">
          <NavbarButton
            icon={faEnvelope}
            action={() => alert("placeholder")}
          ></NavbarButton>
          <NavbarButton
            icon={faCog}
            action={() => alert("placeholder")}
          ></NavbarButton>
          <NavbarButton
            icon={theme == "light" ? faSun : faMoon}
            action={() => setTheme(theme == "light" ? "dark" : "light")}
          ></NavbarButton>
          <NavbarButton
            icon={faChevronLeft}
            action={() => alert("placeholder")}
          ></NavbarButton>
        </div>
      </Navbar>
    </>
  );
};

export default Home;
