import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

import Page from "../components/Page";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme="system" attribute="class">
    {/* <Page /> */}
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
