import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => (
	<ThemeProvider defaultTheme="dark" attribute="class">
		<Component {...pageProps} />
	</ThemeProvider>
);

export default App;
