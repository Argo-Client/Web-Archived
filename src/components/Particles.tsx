import Particles from "react-tsparticles";
import { useTheme } from "next-themes";

const ParticleBG = ({ className = "" }: { className?: string }) => {
	var { theme } = useTheme();

	return (
		<Particles
			className={`inset-0 ${className}`}
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
						outMode: "bounce",
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
export default ParticleBG;
