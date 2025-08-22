import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { Flowbite } from "flowbite-react";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Flowbite>
        <Component {...pageProps} />
      </Flowbite>
    </ThemeProvider>
  );
}

export default MyApp;
