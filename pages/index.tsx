import Nav from "@components/Nav";
import Page from "@components/Page";
import { LesUur } from "../components/Items";

const Home = () => {
	const times = ["nacht", "morgen", "middag", "navond"];
	let hours = new Date().getHours();
	let timeOfDay = times[Math.floor(hours / 6)];

	return (
		<Page title="Argo - Home" description="Argo is superstoer.">
			<Nav />
			<div className="align-top inline-block p-8">
				<h1 className="text-5xl">Goede{timeOfDay} Sam</h1>
				<div className="card mt-8 p-4 text-lg dark:text-gray-300 text-gray-700">
					Je hebt nu:
					<LesUur uur="1" info="MEG - Nederlands" lokaal="a410" tijd="9:30 - 10:30" />
					Volgende lessen:
					<LesUur uur="1" info="MEG - Nederlands" lokaal="a410" tijd="9:30 - 10:30" />
					<LesUur uur="1" info="MEG - Nederlands" lokaal="a410" tijd="9:30 - 10:30" />
				</div>
			</div>
		</Page>
	);
};

export default Home;
