import Page from "@components/Page";
export default function NotFound() {
	return (
		<Page title="404. Not Found" description="Deze pagina bestaat niet.">
			<div className="h-screen w-screen flex justify-center items-center text-6xl">404 Not found</div>
		</Page>
	);
}
