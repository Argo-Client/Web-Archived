import { LoginInput } from "../components/Input";
import Image from "next/image";
import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import { faLock, faSchool, faUser } from "@fortawesome/free-solid-svg-icons";

const Background = () => {
  var { theme } = useTheme();

  return (
    <Particles
      className="h-screen w-screen absolute top-0 z-0"
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: theme == "light" ? "#333" : "#fff",
          },
          links: {
            color: theme == "light" ? "#333" : "#fff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

const Login = () => (
  <>
    <Background />
    <div className="flex justify-center items-center h-screen container-self">
      <div className="md:w-1/3 w-10/12 mx-auto p-8 z-10 card">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            width={128}
            height={128}
            className="bg-blue-500 rounded-full shadow-md"
          />
        </div>

        <form action="" method="POST">
          <LoginInput icon={faSchool} placeholder="School" type="text" />
          <LoginInput icon={faUser} placeholder="Gebruikersnaam" type="text" />
          <LoginInput icon={faLock} placeholder="Wachtwoord" type="password" />
          <input
            className="float-right mt-5 mr-1 h-12 text-lg btn"
            type="submit"
            value="Inloggen"
          />
        </form>
      </div>
    </div>
  </>
);

export default Login;
