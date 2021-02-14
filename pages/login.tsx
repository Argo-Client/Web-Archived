import Page from "@components/Page";
import LoginInput from "@components/Input";
import ArgoLogo from "@components/Argo";
import Background from "@components/Particles";

import { FaLock, FaSchool, FaUser } from "react-icons/fa";
import { GetServerSideProps } from "next";
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.cryptr);

const Login = ({ csrf }) => (
	<Page title="Argo - Login" description="Log nu in met je Magister 6 account!">
		<Background className="w-2/3 h-screen lg:inline-block hidden align-top" />
		<div className="h-screen lg:w-1/3 w-full inline-block align-top dark:bg-dark-secondary px-4 bg-light-secondary shadow-lg">
			<div className="ml-auto mt-4 max-w-max text-4xl flex items-center">
				<h1>Argo voor Magister 6</h1>
				<ArgoLogo large className="ml-6" />
			</div>

			<div className="w-10/12 mx-auto h-3/6 flex items-end">
				<form action="/api/login" method="POST" className="w-full">
					<LoginInput Icon={FaSchool} name="tenant" placeholder="School" type="text" autoFocus />
					<LoginInput Icon={FaUser} name="username" placeholder="Gebruikersnaam" type="text" />
					<LoginInput Icon={FaLock} name="password" placeholder="Wachtwoord" type="password" />
					<input className="float-right mt-2 btn p-3 text-xl" type="submit" value="Inloggen" />
					<input type="hidden" name="csrf" value={csrf} />
				</form>
			</div>
		</div>
	</Page>
);

export const getServerSideProps: GetServerSideProps = async context => {
	let csrf = cryptr.encrypt(new Date().getTime());
	return {
		props: {
			csrf,
		},
	};
};
export default Login;
