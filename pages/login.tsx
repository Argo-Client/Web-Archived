import Container from "../components/Container";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
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
    <Container className="flex justify-center items-center h-screen">
      <Card className="md:w-1/3 w-10/12 min-w-min inline-block mx-auto p-8 relative z-10">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            width={128}
            height={128}
            className="bg-blue-500 rounded-full shadow-md"
          />
        </div>

        <form action="" method="POST">
          <Input
            icon={faSchool}
            placeholder="School"
            className="login-input"
            type="text"
          />
          <Input
            icon={faUser}
            placeholder="Gebruikersnaam"
            className="login-input"
            type="text"
          />
          <Input
            icon={faLock}
            placeholder="Wachtwoord"
            className="login-input"
            type="password"
          />
          <Button className="float-right mt-5 mr-1 h-12 w-16 text-lg">
            Login
          </Button>
        </form>
      </Card>
    </Container>
  </>
);

export default Login;
