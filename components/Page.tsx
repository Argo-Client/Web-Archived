import Head from "next/head";

const Page = ({ title, description, children }: { title: string; description: string; children: JSX.Element }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
		{children}
	</>
);
export default Page;
