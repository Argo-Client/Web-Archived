import LoginInput from "@components/Input";
import ArgoLogo from "@components/Argo";
import Background from "@components/Particles";

import { FaLock, FaSchool, FaUser } from "react-icons/fa";

const Login = () => (
	<>
		<Background />
		<div className="flex justify-center items-center h-screen">
			<div className="p-6 z-0 card">
				<div className="flex justify-center mt-4 mb-8">
					<ArgoLogo large />
				</div>

				<form action="" method="POST">
					<LoginInput Icon={FaSchool} placeholder="School" type="text" autoFocus />
					<LoginInput Icon={FaUser} placeholder="Gebruikersnaam" type="text" />
					<LoginInput Icon={FaLock} placeholder="Wachtwoord" type="password" />
					<input className="float-right mt-2 btn" type="submit" value="Inloggen" />
				</form>
			</div>
		</div>
	</>
);

export default Login;
