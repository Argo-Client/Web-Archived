import Page from "@components/Page";

import { VscSearchStop } from "react-icons/vsc";

export default function NotFound() {
	return (
		<Page title="Argo - Error 404" description="Deze pagina bestaat niet.">
			<div className="h-screen mx-auto container flex justify-center items-center">
				<div>
					<VscSearchStop className="not-found text-gray-300 w-1/3 mx-auto h-1/2 mb-6" />
					<div className="text-3xl md:text-6xl">Pagina niet gevonden.</div>
				</div>
			</div>
		</Page>
	);
}
